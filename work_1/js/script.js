"use strict";

let numberOfFilms = prompt('How many films have you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
};

let a = prompt('One of the last watching films', '');
let b = prompt('На сколько оцените его?', '');
let c = prompt('One of the last watching films', '');
let d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);