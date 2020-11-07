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

const nameInputRef = document.querySelector("#name-input");
const nameNameOutput = document.querySelector("#name-output");

nameInputRef.addEventListener("input", event => {
   nameNameOutput.textContent = event.target.value;
   
   if (nameNameOutput.textContent === "") {
      nameNameOutput.textContent = "незнакомец";
   };
});
