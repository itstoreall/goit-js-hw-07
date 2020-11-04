/**
 * 
 * - Задание 4
 * 
 * Счетчик состоит из спана и кнопок, которые должны 
 * увеличивать и уменьшать значение счетчика на 1.
 * 
 * - Создай переменную counterValue в которой будет 
 * хранится текущее значение счетчика.
 * 
 * - Создай функции increment и decrement для 
 * увеличения и уменьшения значения счетчика
 * 
 * - Добавь слушатели кликов на кнопки, вызовы 
 * функций и обновление интерфейса
 * 
 */

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const counterValueRef = document.querySelector("#value");

let counterValue = 0;

incrementBtnRef.addEventListener("click", () => {
   counterValue += 1;
   counterValueRef.textContent = counterValue;
});

decrementBtnRef.addEventListener("click", () => {
   if (counterValue < 1) {
      counterValue = 0;
   } else { counterValue -= 1 };
   counterValueRef.textContent = counterValue;
});