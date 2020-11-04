/**
 * 
 * - Задание 1
 * 
 * Напиши скрипт, который выполнит следующие операции.
 * 
 * Посчитает и выведет в консоль количество категорий в 
 * ul#categories, то есть элементов li.item. Получится 
 * 'В списке 3 категории.'.
 * 
 * Для каждого элемента li.item в списке ul#categories, 
 * найдет и выведет в консоль текст заголовка элемента 
 * (тега h2) и количество элементов в категории 
 * (всех вложенных в него элементов li).
 * 
 * Например для первой категории получится:
 * 
 * Категория: Животные
 * Количество элементов: 4
 * 
 * * - В HTML есть список категорий ul#categories
 * 
 */

const items = document.querySelectorAll(".item");
const quantityItems = items.length;
console.log(`В списке ${quantityItems} категории.`)

items.forEach(item => {
   console.log(`Категория: ${item.children[0].innerText}`);
   console.log(`Количество элементов: ${item.children[1].children.length}`);
})
