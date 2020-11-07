/**
 * 
 * - Задание 6
 * 
 * Напиши скрипт, который бы при потере 
 * фокуса на инпуте, проверял его содержимое 
 * на правильное количество символов.
 * 
 * Сколько символов должно быть в инпуте, 
 * указывается в его атрибуте data-length.
 * 
 * Если введено подходящее количество, то 
 * border инпута становится зеленым, если 
 * неправильное - красным.
 * 
 * Для добавления стилей, используй 
 * CSS-классы valid и invalid.
 * 
 */

const inputValidationRef = document.querySelector("#validation-input");
const inpunDataLength = inputValidationRef.dataset.length;

inputValidationRef.addEventListener("blur", () => {
   if (inputValidationRef.value.length === Number(inpunDataLength)) {
      inputValidationRef.classList.remove("invalid");
      inputValidationRef.classList.add("valid");
   } else if (inputValidationRef.value.length === 0) {
      inputValidationRef.classList.remove("valid");
      inputValidationRef.classList.remove("invalid");
   } else {
      inputValidationRef.classList.remove("valid");
      inputValidationRef.classList.add("invalid");
   }
});