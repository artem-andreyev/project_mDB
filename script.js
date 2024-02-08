/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(item => {
    item.remove();
});

// adv.forEach(function (item){ // 2 вариант
//     item.remove();
// });

const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre"); // Взял елемент с родителя
genre.textContent = "ДРАМА";

poster.style.backgroundImage = "url('img/bg.jpg')";

const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// const promo__adv = document.querySelector(".promo__adv"); // 1
// promo__adv.remove();

// const rename = document.querySelector(".promo__genre"); // 2
// rename.replaceWith("ДРАМА")

// const background = document.querySelector(".promo__bg").src="img/bg.jpg"; // 3
// const backgroundNew = 
// background.replaceWith(image);