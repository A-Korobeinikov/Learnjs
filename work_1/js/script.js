"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watch?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watch?', '');
    }
}

//start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
};



function rememberMyFirst() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last watching films', '');
        const b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
     
    }
}

//rememberMyFirst();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель'); 
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Что-то пошло не так!');
    }
}
//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else if (personalMovieDB.privat != false) {
        console.log('Категория приватна для просмотра!');
    } else {
        console.log('Ups!');
    }
}
//showMyDB();

function writeYourGenres() {
    let a = personalMovieDB.genres;
    for(let i=1; i <= 3; i++) {
        a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push (a);
    }
    console.log(personalMovieDB);
}
//writeYourGenres();
 