/**
 * 
 * - Задание 8
 * 
 * Напиши скрипт создания и очистки коллекции элементов. 
 * 
 * Пользователь вводит количество элементов в input и 
 * нажимает кнопку Создать, после чего рендерится 
 * коллекция. При нажатии на кнопку Очистить, 
 * коллекция элементов очищается.
 * 
 * Создай функцию createBoxes(amount), которая принимает 
 * 1 параметр amount - число. Функция создает столько div, 
 * сколько указано в amount и добавляет их в div#boxes.
 * 
 * Каждый созданный div:
 * - Имеет случайный rgb цвет фона
 * - Размеры самого первого div - 30px на 30px
 * - Каждый следующий div после первого, должен быть 
 * шире и выше предыдущего на 10px
 * 
 */

// - Находим div и кнопки по data-*

const boxesRef = document.getElementById("boxes");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

// - Запускаем кликом функцию получения значения из инпута (type="number")
// и функцию очистки строки (удалить контент в input)

renderBtnRef.addEventListener("click", getInputValue);
destroyBtnRef.addEventListener("click", destroyBoxes);

// 2. - Функция создает div в который впихиваются маленькие дивы 
// с начальным значением созданные в цикле, рандомных цветов 
// и динамическим размером. Количество итераций определяется  
// amount - значением инпута type="number"

function createBoxes(amount) {
  const initialSize = 30;
  const containerRef = document.createElement("div");
  for (let i = 0; i < amount; i += 1) {
    const size = initialSize + i * 10;
    const newDiv = document.createElement("div");
    newDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    containerRef.appendChild(newDiv);
  }
  boxesRef.appendChild(containerRef);
};

// 1. - Функция берет из инпута значение, и в его 
// контексте запускает создание дивчика 

function getInputValue() {
  const inputValue = document.querySelector("#controls > input").value;
  createBoxes(inputValue);
};

// 3. - Функция создает рандомные цвета rgba

function randomColor() {
  return Math.floor(Math.random() * 256);
};

// 4. - Функция очищает строку (инпут)

function destroyBoxes() {
  boxesRef.textContent = "";
};