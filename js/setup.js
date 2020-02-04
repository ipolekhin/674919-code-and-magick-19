'use strict';

var arrLength = 4;
var fName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// С помощью функции генерируем случайное число от и до
var generateNumbersOfRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// С помощью функции выбираем из массива случайное значение
var generateArrNumber = function (arr) {
  var length = generateNumbersOfRange(1, arr.length);
  return arr[length - 1];
};

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = generateArrNumber(fName) + ' ' + generateArrNumber(lName);
  wizardElement.querySelector('.wizard-coat').style.fill = generateArrNumber(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = generateArrNumber(eyesColor);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < arrLength; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
