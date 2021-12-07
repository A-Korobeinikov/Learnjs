"use strict";

let personalMovieDB = {
    count: 0,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you watch?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watch?', '');
        }
    },
    rememberMyFirst: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель'); 
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Что-то пошло не так!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i=1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre === '' || genre === null) {
                console.log('Вы ввели неккоректные данные');
                i--;
            } else {
                personalMovieDB.genres [i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }, 
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }        
    },
};

personalMovieDB.writeYourGenres();



 