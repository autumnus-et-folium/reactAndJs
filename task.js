"use strict";
/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
	b = prompt("На сколько оцените его?", ""),
	c = prompt("Один из последних просмотренных фильмов?", ""),
	d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
//console.log(personalMovieDB.movies[a]);
console.log(personalMovieDB); */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
/* let h = document.querySelector("h1");

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}; */

/* for(let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");
	if (a != null && a != "" && b != null && b != "" && a.length <= 50 && b.length <= 2) {
		personalMovieDB.movies[a] = b;
	} else {
		console.log("вводи значения мудила");
		i--;
	}
} */
/* let i = 0; */
/* do {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");
	if (a != null && a != "" && b != null && b != "" && a.length <= 50 && b.length <= 2) {
		personalMovieDB.movies[a] = b;
	} else {
		console.log("вводи значения мудила");
		i--;
	} 
	i++;
} while ( i < 2); */

/* while (i < 2) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");
	if (a != null && a != "" && b != null && b != "" && a.length <= 50 && b.length <= 2) {
		personalMovieDB.movies[a] = b;
	} else {
		console.log("вводи значения мудила");
		i--;
	}
	i++;
}
 */
/* if(personalMovieDB.count < 10) {
	//console.log("Просмотрено довольно мало фильмов");
	h.textContent = "Просмотрено довольно мало фильмов";

} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	//console.log("Просмотрено довольно много фильмов");
	h.textContent = "Просмотрено довольно много фильмов";
} else if (personalMovieDB.count >= 30) {
	//console.log("Вы киноман");
	h.textContent = "Вы киноман";
} else {
	//console.log("Произошла ошибка");
	h.textContent = "Произошла ошибка";
} */

/* switch (true) {
case personalMovieDB.count < 10:
	h.textContent = "Просмотрено довольно мало фильмов";
	break;
case personalMovieDB.count >= 10:
	h.textContent = "Просмотрено довольно много фильмов";
	break;

case personalMovieDB.count >= 30:
	h.textContent = "Вы киноман";
	break;
default:
	h.textContent = "Произошла ошибка";
} */

//тернарный оператор не подходит для множества проверок
/* (personalMovieDB.count < 10) ? h.textContent = "Просмотрено довольно мало фильмов" : h.textContent = "Произошла ошибка";
(personalMovieDB.count >= 10) ? h.textContent = "Просмотрено довольно много фильмов" : h.textContent = "Произошла ошибка";
(personalMovieDB.count >= 30) ? h.textContent = "Вы киноман" : h.textContent = "Произошла ошибка"; */

/* console.log(personalMovieDB); */


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

let h = document.querySelector("h1");

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememberMyFilms() {
	for(let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
			b = prompt("На сколько оцените его?", "").trim();
		if (a != null && a != "" && b != null && b != "" && a.length <= 50 && b.length <= 2) {
			personalMovieDB.movies[a] = b;
		} else {
			console.log("вводи значения мудила");
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel () {
	if(personalMovieDB.count < 10) {
		//console.log("Просмотрено довольно мало фильмов");
		h.textContent = "Просмотрено довольно мало фильмов";
    
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		//console.log("Просмотрено довольно много фильмов");
		h.textContent = "Просмотрено довольно много фильмов";
	} else if (personalMovieDB.count >= 30) {
		//console.log("Вы киноман");
		h.textContent = "Вы киноман";
	} else {
		//console.log("Произошла ошибка");
		h.textContent = "Произошла ошибка";
	}
}

detectPersonalLevel();

function showMyDB () {
	if(personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres () {
	for(let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
		if(genre != "" && genre != null && genre <= 10) {
			personalMovieDB.genres.push(genre);
		}
	}
}

writeYourGenres();
