/* // eslint-disable-next-line no-unused-vars
let obj = {
	a: 33,
	b: 44,
	c: 55,
	d: 66,
	e: 77,
	f: 88,
	g: 99,
	h: 101010,
};

let bb = "11";
console.log(obj[bb]);
obj[bb] = bb;
console.log(obj);
console.log(obj["11"]); */

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


/* //Что выведет в консоль код?
console.log( NaN || 2 || undefined ); // 2


console.log( NaN && 2 && undefined ); //nan


console.log( 1 && 2 && 3 ); //3


console.log( !1 && 2 || !3 ); //!1/true


console.log( 25 || null && !3 ); //25


console.log( NaN || null || !3 || undefined || 5); //5


console.log( NaN || null && !3 && undefined || 5); //5


console.log( 5 === 5 && 3 > 1 || 5); //5===5/true */

/* (1 > 0) ? console.log("1>0") : console.log("1<=0"); */

/* //Выполняется ли условие?
const hamburger = 3;
//const fries = 3;
const fries = 2;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) { //true
	console.log("Done!");
}
(hamburger === 3 && cola || fries === 3 && nuggets) ? console.log("Done!") : console.log("идите на хуй я вас не звал"); */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) { //true-nuggets
	console.log("Done!/true-nuggets");
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) { //false
	console.log("Done!");
} else {
	console.log("идите на хуй я вас не звал лжывые ублюдки");
} */
/* console.log("abc".repeat(6)+"/n"); // '' */

/* let result = "";
for (let i = 1; i < 8; i++) {
	result += "*".repeat(i) + "\n";
}
console.log(result.trim()); */

/* function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i < 11; i++) {
		//arrayOfNumbers[i - 5] = i;
		arrayOfNumbers.push(i);
	}

	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}
console.log(fifthTask()); */

/* function firstTask() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		//result[i] = arr[i];
		result.push(arr[i]);
	}

	console.log(result);
	return result;
}

firstTask(); */

/* function secondTask() {
	const data = [5, 10, "Shopping", 20, "Homework"];

	for (let i = 0; i < data.length; i++) {
		if (typeof(data[i]) === "number") {
			data[i] = data[i] * 2;
		} else if (typeof(data[i]) === "string") {
			data[i] = `${data[i]} - done`;
		}
	}

	console.log(data);
	return data;
}

secondTask();

function thirdTask() {
	const data = [5, 10, "Shopping", 20, "Homework"];
	const result = [];

	for (let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.length - i];
	}

	console.log(result);
	return result;
}

thirdTask(); */

/* const lines = 5;
let result = "";
 
for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let k = 0; k < 2 * i + 1; k++) {
		result += "*";
		console.log(k);
	}
	result += "\n";
}
 
console.log(result); */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

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

/* function sayHello(x) {
	return `sayHello('${x}')`;
}
console.log(sayHello("Антон")); */

/* function returnNeighboringNumbers(x) {
	return [x -1,x,x + 1];
}
console.log(returnNeighboringNumbers(10)); */

/* function getMathResult(x,y) {
	if (typeof(y) !== "number" || y <= 0) {
		return x;
	}

	let str = "";

	for (let i = 1; i <= y; i++) {
		if (i === y) {
			str += `${x * i}`;
		} else {
			str += `${x * i}---`;
		}
	}

	return str;
}

console.log(getMathResult(5,3)); */