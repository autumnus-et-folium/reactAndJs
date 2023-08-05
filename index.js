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

/* console.log(parseInt("11.7")); */
