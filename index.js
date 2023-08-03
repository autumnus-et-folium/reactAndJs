// eslint-disable-next-line no-unused-vars
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
console.log(obj["11"]);