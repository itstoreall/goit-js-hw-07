/**
 * 
 * - Задание 5
 * 
 * Напиши скрипт который, при наборе текста в инпуте 
 * input#name-input (событие input), подставляет 
 * его текущее значение в span#name-output. 
 * 
 * Если инпут пустой, в спане должна 
 * отображаться строка 'незнакомец'.
 * 
 */

// - Решение с терн. оператором

const nameInputRef = document.querySelector("#name-input");
const nameNameOutput = document.querySelector("#name-output");

nameInputRef.addEventListener("input", event => {
   nameNameOutput.textContent = event.target.value;
   
   nameNameOutput.textContent === '' ? nameNameOutput.textContent = "незнакомец" : nameNameOutput.textContent = event.target.value;
});

/*
// ====================================================
// - Решение с if

const nameInputRef = document.querySelector("#name-input");
const nameNameOutput = document.querySelector("#name-output");

nameInputRef.addEventListener("input", event => {
   nameNameOutput.textContent = event.target.value;
   
   if (nameNameOutput.textContent === "") {
      nameNameOutput.textContent = "незнакомец";
   };
});

*/
