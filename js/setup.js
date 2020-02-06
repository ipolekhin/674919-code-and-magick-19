'use strict';

// Ссылка на пустой объект
var fragment = document.createDocumentFragment();
// Создаем пустой массив wizards
var wizards = [];
// Задаём какой дилнны будет массив wizards при его заполнении
var arrLength = 4;
var fName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
// Находим элемент, в котором будем выводить наш новый созданный DOM элемент
var similarListElement = document.querySelector('.setup-similar-list');
// Находим шаблон, который будем использовать для создания списка массива
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

document.querySelector('.setup')
  .classList
  .remove('hidden');

// С помощью функции генерируем случайное число от и до
var generateNumbersOfRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// С помощью функции выбираем из массива случайное значение
var generateArrNumber = function (arr) {
  var length = generateNumbersOfRange(1, arr.length);
  return arr[length - 1];
};

// Функция, которая заполняет массив 'wizards' данными
var fillArray = function () {
  for (var i = 0; i < arrLength; i++) {
    wizards[i] = {
      name: generateArrNumber(fName) + ' ' + generateArrNumber(lName),
      coatColor: generateArrNumber(coatColor),
      eyesColor: generateArrNumber(eyesColor)
    };
  }
};
fillArray();

// Функция, которая клонирует наш шаблон и заполняет его входными данными из массива i-го элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label')
    .textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat')
    .style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes')
    .style.fill = wizard.eyesColor;
  return wizardElement;
};

// Запускаем цикл по массиву данных
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

// Добавляем итоговый DOM элемент fragment на страницу
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar')
  .classList
  .remove('hidden');
