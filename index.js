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