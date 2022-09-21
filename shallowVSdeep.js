//! shallow copy
// let obj = {
// 	name: "manish",
// };

// let user = obj;

// user.name = "bruce";

// it copy by references

//! deep copy of
// let details = {
// 	name: "manish",
// 	age: 23,
// };
// // let user = { ...details };
// let user = Object.assign({}, details);
// user.name = "Rovin";
// console.log(details);
//?----------------------

// let a = {
// 	name: "manish",
// 	address: {
// 		city: "Noida",
// 		state: "UP",
// 	},
// };

// let user = JSON.parse(JSON.stringify(a));

// user.address.city = "Delhi";
// user.address.state = "Delhi";
// console.log("user: ", user);
// console.log("a", a);

//! shallow copy
// let a = {
// 	name: "manish",
// 	age: 23,
// };

// let b = a;

// b.name = "Rovin";

// console.log("b", b);
// console.log("a", a);

//deep copy

// let a = {
// 	name: "manish",
// 	age: 23,
// 	address: {
// 		city: "Noida",
// 		state: "UP",
// 	},
// };

// let b = { ...a };

// b.name = "Rovin";
// b.name.city = "Delhi";

// console.log("b", b);
// console.log("a", a);

// stringy parse

let a = {
	name: "manish",
	age: 23,
	address: {
		city: "Noida",
		state: "UP",
	},
	add: function () {
		return 1 + 2;
	},
};

let b = JSON.parse(JSON.stringify(a));

b.name = "Rovin";
b.address.city = "Delhi";

console.log("b", b);
console.log("a", a);

// lodish
