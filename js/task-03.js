/**
 * 
 * - Задание 3
 * 
 * В HTML есть список ul#gallery
 * 
 * Напиши скрипт для создания галлереи 
 * изображений по массиву данных
 * 
 * Используй массив объектов images для создания 
 * тегов img вложенных в li. Для создания разметки 
 * используй шаблонные строки и insertAdjacentHTML().
 * 
 * Вместо insertAdjacentHTML() использовать 
 * createElement (Репета)
 * 
 * Все элементы галереи должны добавляться 
 * в DOM за одну операцию вставки.
 * 
 * Добавь минимальное оформление галереи 
 * флексбоксами или гридами через css-классы.
 * 
 */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector("#gallery");
const arrImages = images.reduce((liStr, elem) => liStr + `<li class="gallery-item"><img class="image-task-03" src="${elem.url}" alt="${elem.alt}"></li>`, ``);
galleryRef.insertAdjacentHTML("beforeend", arrImages);

/*

// - Добавляем li в список за одну операцию

const galleryRef = document.querySelector("#gallery");

const galleryItems = images.map(item => {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery-item");

  const imageRef = document.createElement("img");
  imageRef.classList.add("image-task-03");

  imageRef.alt = item.alt;
  imageRef.src = item.url;

  galleryItemRef.appendChild(imageRef);

  return galleryItemRef;
});

galleryRef.append(...galleryItems);

*/
/*
// ======================================================
// - Добавляем li в список за шесть операций

const galleryRef = document.querySelector("#gallery");

const galleryItems = images.map(item => {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery-item");

  const imageRef = document.createElement("img");
  imageRef.classList.add("image-task-03");

  imageRef.alt = item.alt;
  imageRef.src = item.url;

  galleryItemRef.appendChild(imageRef);
  galleryRef.appendChild(galleryItemRef);
});

*/