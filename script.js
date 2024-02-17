    document.addEventListener("DOMContentLoaded", () => {
        "use strict";

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
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adv);

    // adv.forEach(function (item){ // 2 вариант
    //     item.remove();
    // });

    const makeChanges = () => {
        genre.textContent = "ДРАМА";

        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    const poster = document.querySelector(".promo__bg");
    const genre = poster.querySelector(".promo__genre"); // Взял елемент с родителя

    const movieList = document.querySelector(".promo__interactive-list");
    movieList.innerHTML = "";
    movieDB.movies.sort();

    const addForm = document.querySelector("form.add");
    const addInput = addForm.querySelector(".adding__input");
    const checkbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {  // True
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    


// const promo__adv = document.querySelector(".promo__adv"); // 1
// promo__adv.remove();

// const rename = document.querySelector(".promo__genre"); // 2
// rename.replaceWith("ДРАМА")

// const background = document.querySelector(".promo__bg").src="img/bg.jpg"; // 3
// const backgroundNew = 
// background.replaceWith(image);

// const addElement = (event) => {
//     if (i == 1) {
//         btn.addEventListener("click", addElement);
//     }
// }

// let buttonValues = confirmButton.addEventListener("click", addElement);
// buttonValues.movieDB.movies

});