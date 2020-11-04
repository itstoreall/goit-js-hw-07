/**
 * 
 * - Задание 2
 * 
 * В HTML есть пустой список ul#ingredients
 * В JS есть массив строк.
 * 
 * Напиши скрипт, который для каждого элемента 
 * массива ingredients создаст отдельный li, 
 * после чего вставит все li за одну операцию в 
 * список ul.ingredients. Для создания DOM-узлов 
 * используй document.createElement()
 * 
 */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach(element => {
   const ingredient = document.createElement("li");
   ingredient.textContent = element;
   ingredientsRef.appendChild(ingredient);
});
