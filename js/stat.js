'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 10;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;

// Функция для рисования
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция для вычисления случайного числа от 1 до 100
var getRandomNumber = function () {
  return Math.round(Math.random() * 100);
};

// Функция для вычисления максимального числа из массива
var getMaxElement = function (arr) {
  if (arr.length) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }
  return maxElement ? maxElement : 'Передан пустой массив!';
};

window.renderStatistics = function (ctx, names, times) {
  // Вызов функции для вычисления максимального времени
  var maxTime = getMaxElement(times);

  // Вызов функции для рисования, рисуем тень облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  // Вызов функции для рисования, рисуем белое облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  ctx.fillStyle = '#000000';
  // На облаке выводим текст сообщения ’Ура вы победили! Список результатов: ’
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  for (var i = 0; i < names.length; i++) {
    // Вычисление координаты X для построения столбца учитывая смещение
    var newCoordinateX = CLOUD_X + GAP * 4 + (HISTOGRAM_WIDTH + GAP * 5) * i;
    // Строим высоту гистограммы каждого игрока в зависимости от его времени
    var currentHistogramHeight = HISTOGRAM_HEIGHT * times[i] / maxTime;

    // Цвет заливки
    ctx.fillStyle = '#000000';
    // Выводим имя игрока
    ctx.fillText(names[i], newCoordinateX, (CLOUD_Y + CLOUD_HEIGHT) - GAP - TEXT_HEIGHT);
    // Выводим время игрока
    ctx.fillText(Math.round(times[i]), newCoordinateX, (CLOUD_Y + CLOUD_HEIGHT) - GAP - TEXT_HEIGHT - GAP - currentHistogramHeight - GAP - TEXT_HEIGHT);
    // Раскрашиваем колонку игрока
    if (names[i] === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      // Насыщенность задаём случайным образом
      ctx.fillStyle = 'hsl(240, ' + getRandomNumber() + '%, 50%)';
    }
    // Выводим гистограмму игрока
    ctx.fillRect(newCoordinateX, (CLOUD_Y + CLOUD_HEIGHT) - GAP * 2 - TEXT_HEIGHT - GAP - currentHistogramHeight, HISTOGRAM_WIDTH, currentHistogramHeight);
  }
};
