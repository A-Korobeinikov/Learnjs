"use strict";

let numberOfFilms = prompt('How many films have you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
};

// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the last watching films', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
 
// }



 // Реализация через While
// let i = 0 ;
// while (i < 2) {
    
//     const a = prompt('One of the last watching films', '');
//     const b = prompt('На сколько оцените его?', '');    
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     personalMovieDB.movies[a] = b;
//     i++;
    
// }

//реализация через do
 let i = 0;
do {
    const a = prompt('One of the last watching films', '');
    const b = prompt('На сколько оцените его?', '');    
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    personalMovieDB.movies[a] = b;
    i++;
} while (i < 2);



// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель'); 
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман!');
// } else {
//     console.log('Что-то пошло не так!');
// }

 console.log(personalMovieDB);