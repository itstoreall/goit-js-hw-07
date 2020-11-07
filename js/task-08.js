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


const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

renderBtnRef.addEventListener("click", getInputValue);
destroyBtnRef.addEventListener("click", destroyBoxes);

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

function getInputValue() {
  const inputValue = document.querySelector("#controls > input").value;
  createBoxes(inputValue);
};

function destroyBoxes() {
  boxesRef.textContent = "";
};

function randomColor() {
  return Math.floor(Math.random() * 256);
};