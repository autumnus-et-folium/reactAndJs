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

/* var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект. */

/* var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }
 */
/* var v1 = "123";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
console.log(obj); // { "0": "1", "1": "2", "2": "3" } */

/* function copy(mainObj) {
	let objCopy = {}; // objCopy будет хранить копию mainObj
	let key;
  
	for (key in mainObj) {
	  objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
	}
	return objCopy;
}
  
const mainObj = {
	a: 2,
	b: 5,
	c: {
	  x: 7,
	  y: 4,
	},
};
  
console.log(copy(mainObj)); */

/* let obj = {
	a: 1,
	b: 2,
};
let obj1 = {
	ghgh: 11,
	gfgfgf:22,
	hghghf:44,
};
let obj2 = {
	a: 11,
	b: 2,
};
let obj3 = {
	a: 1,
	b: 222,
};
let objCopy = Object.assign({}, obj, obj1, obj2, obj3);
console.log(objCopy);
//В примере выше, при использовании Object.assign(), последние значения свойств объектов с одинаковыми ключами перетирают предыдущие значения.
//Таким образом, свойство a из obj3 перезаписывает значение a: 11 из obj2, и свойство b из obj3 перезаписывает значение b: 2 из obj. */

/* ----------------------------------- */

/* var v1 = '123'; // [1,2,3] - индекс 0 1 2
var v2 = 'true'; //[t,r,u,e] - индекс 0 1 2 3
var v3 = '20'; // [2,0] - индекс 0 1
var v4 = Symbol('foo')

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
//каждый новый обьект со схожим ключом заменяет предидуещее значение ключа
// Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
console.log(obj); // { "0": "1", "1": "2", "2": "3" } */

/* ----------------------------------- */

/* let obj = {
	a: 1,
	b: 2,
};
let objCopy = Object.assign({}, obj);
  
console.log(objCopy); // результат - { a: 1, b: 2 }
objCopy.b = 89;
console.log(objCopy); // результат - { a: 1, b: 89 }
console.log(obj); // результат - { a: 1, b: 2 } */

/* ----------------------------------- */

/* let obj = {
	a: 1,
	b: {
	  c: 2,
	},
};
let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }
  
obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }
  
newObj.a = 20;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 20, b: { c: 2} }
  
newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }
  
//Что? Почему obj.b.c = 30?
//Отлично, вот мы попались в ловушку с Object.assign(). Object.assign делает только поверхностную копию.
//А newObj.b и obj.b вместе отсылаются к одному и тому объекту, так как отдельные копии не создавались, а была сделана отсылка к объекту.
//Любое изменение сделанное на любом свойстве объекта, применится ко всем отсылкам использующим объект.
//Как это исправить? Читаем дальше, там будет исправление этой проблемы.
 */

/* ----------------------------------- */

/* //Прототип - это JS объект, от которого другие объекты наследуют его свойства и методы.
//По умолчанию, у каждого объекта есть свой прототип и если у искомого объекта не хватает каких-либо свойств, то они ищутся в прототипе.
//В свою очередь, если и у ближайшего прототипа нет этих свойств, то они ищутся ниже в иерархии прототипов.
//По такому принципу происходит наследование прототипов в JS. */

/* let someObj = {
	a: 2,
};
  
let obj = Object.create(someObj, { 
	b: {
	  value: 2,  
	},
	c: {
	  value: 3,
	  enumerable: true, //enumerable - перечислимые
	},
});
  
let objCopy = Object.assign({}, obj);
console.log(objCopy); // { c: 3 } */

/* ----------------------------------- */

//Глубокое копирование объектов - Использование JSON.parse(JSON.stringify(object));
/* let obj = { 
	a: 1,
	b: { 
	  c: 2,
	  bb: {
		r:66,
		gg:66,
		tr: {
			eee:65656,
			jkhkkjh: {
				ddfdfdf: 12343,
			}
		}
	  }
	},
};
  
let newObj = JSON.parse(JSON.stringify(obj));
  
obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (Новый нетронутый объект!) 

//Небольшая загвоздка
//К сожалению, этот метод нельзя использовать для копирования методов объекта, которые были написаны пользователем вручную.
//пример 
const user = {
  name: "Alice",
  sayHello: function() { // Здесь sayHello - это метод, который был написан пользователем вручную.
	//Это функция, которая будет выводить приветствие с именем пользователя.
    console.log(`Hello, my name is ${this.name}`);
  }
};
*/

/* ----------------------------------- */

/* let obj = {
	name: "scotch.io",
	exec: function exec() {
	  return true;
	},
};
  
let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));
  
console.log(method1); //Object.assign({}, obj)
/* result
  {
	exec: function exec() {
	  return true;
	},
	name: "scotch.io"
  }
  */
  
//console.log(method2); // JSON.parse(JSON.stringify(obj))
/* result
  {
	name: "scotch.io"
  }
  */

//Результат показывает нам то, что Object.assign() можно использовать для копирования методов, а JSON.parse(JSON.stringify(obj)), к сожалению, нет. */

/* ----------------------------------- */

/* //Копирование циклических объектов
//Циклические объекты — это объекты, у которых есть свойства, ссылающиеся сами на себя. Давайте применим уже известные методы копирования для создания копий циклических объектов и посмотрим, как они сейчас сработают.

//Применяем JSON.parse(JSON.stringify(object))
//Давайте попробуем JSON.parse(JSON.stringify(object)):

// Циклический объект
let obj = { 
	a: "a",
	b: { 
		c: "c",
		d: "d",
	},
};

obj.c = obj.b;
obj.e = obj.a;
obj.b.c = obj.c;
obj.b.d = obj.b;
obj.b.e = obj.b.c;

let newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj);

//В общем, такой подход не работает для циклических объектов. */

/* ----------------------------------- */

//Используем Object.assign()
//Давайте его попробуем:

// Циклический объект
/* let obj = { 
	a: "a",
	b: { 
		c: "c",
		d: "d",
	},
};

obj.c = obj.b;
obj.e = obj.a;
obj.b.c = obj.c;
obj.b.d = obj.b;
obj.b.e = obj.b.c;

let newObj2 = Object.assign({}, obj);

console.log(newObj2);

//Object.assign() отлично работает для поверхностного копирования циклических объектов, но не будет работать для создания глубокой копии.
//Посмотрите на circular object tree в консоли вашего браузера. Я уверен, что вы найдете много всего интересного в том, что там происходит. */

/* ----------------------------------- */

//Используем элементы Spread (…) (Или оператор расширения)
//В ES6 есть элементы rest для деструктурирующего присваивания и spread элементы для работы с литерал массивами.
//Давайте посмотрим на то, как сработает элемент spread на массиве:

/* const array = [
	"a",
	"c",
	"d", {
	  four: 4
	},
];
const newArray = [...array];
console.log(newArray);

// Result 
// ["a", "c", "d", { four: 4 }]

let obj = {
	one: 1,
	two: 2,
};
  
let newObj = { ...obj };
console.log(newObj);

//Обратите внимание, что этот подход действенен для поверхностной копии. */

/* ----------------------------------- */

//https://medium.com/@stasonmars/копирование-объектов-в-javascript-d25c261a7aff

/* ----------------------------------- */

/* let obj = {
	one: 1,
	two: 2,
	tree: {
		four: 4,
		five: 5,
	}
};

let {one, two, tree} = obj;
console.log(tree); */

/* const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function(plan) {
		let {age} = plan;
		let {languages} = plan.skills;
		let str = `Мне ${age} и я владею: `;
		languages.forEach(i => {
			str += `${i.toUpperCase()} `;
		});
		return str;
	}
};

let f0 = personalPlanPeter.showAgeAndLangs(personalPlanPeter);
console.log(f0);

function showExperience(plan) {
	let str = "";
	let {exp} = plan.skills;
	str += exp;
	return str;
}
let f1 = showExperience(personalPlanPeter);
console.log(f1);

function showProgrammingLangs(plan) {
	let str = "";
	let {programmingLangs} = plan.skills;
	if (Object.keys(programmingLangs) != 0) {
		Object.keys(programmingLangs).forEach(i => {str += `Язык ${i} изучен на ${programmingLangs[i]} \n`;});
		return str;
	} else {
		str += "пустая строка";
		return str;
	}
}
let f2 = showProgrammingLangs(personalPlanPeter);
console.log(f2); */

/* ----------------------------------- */
/* 
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	if(arr.length != 0) {
		let str = "Семья состоит из:";
		for(let key in arr) {
			str += ` ${arr[key]}`;
		}
		return str;
	} else {
		str = "Семья пустая";
		return str;
	}
}
console.log(showFamily(family)); */

/* let uuu = {
	a:1,
	b:2,
	n:4,
};

Object.keys(uuu).forEach(i => {
	console.log(uuu.i = "a");
});

 */

/* const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	for(let key in arr) {
		console.log(arr[key].toLowerCase());
	}
}

standardizeStrings(favoriteCities);
 */

/* const someString = "This is some strange string";

function reverse(str) {
	//let arr = Array.from(str);
	//let arr = str.split('');
	let arr = [...str];
	return arr.reverse().join('');
}

console.log(reverse(someString)); */

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
additionalCurrencies.pop();

function availableCurr(arr, missingCurr) {
	let str = `Доступные валюты в baseCurrencies-${arr.length} и additionalCurrencies-${missingCurr.length}: \n`;
	if(arr != 0 || missingCurr != 0) {
		for( let key in arr) {
			str += `${arr[key]} \n`;
		}
		for(let key in missingCurr) {
			str += `${missingCurr[key]} \n`;
		}
	}
	else {
		str = `Нет доступных валют в baseCurrencies и additionalCurrencies. Наличие: ${arr.length + missingCurr.length}`;
	}
	return str;
    
}

console.log(availableCurr(baseCurrencies, additionalCurrencies));