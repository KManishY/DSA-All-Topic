//? access the value of the object
// console.log(Object.keys(obj));
// let names = "rabinarayan";
// let map = {};
// for (let item of names) {

// 	map[item] ? (map[item] += 1) : (map[item] = 1);

//     map[item]=(map[item]||0)+1

// }
// console.log(map);

class Car {
	constructor(name, color, brand) {
		this.name = name;
		this.color = color;
		this.brand = brand;
	}
}
// class Thar {
// 	constructor() {
// 		super();
// 	}
// }

let car1 = new Car("Thar", "brown", "mahindra");
let car2 = new Car("Santro", "white", "");

console.log("car1: ", car1);
