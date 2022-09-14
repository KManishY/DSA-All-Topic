// function sum(a, b, c) {
// 	return a + b + c;
// }

// function curring(fn) {
// 	return function (a) {
// 		return function (b) {
// 			return function (c) {
// 				return fn(a, b, c);
// 			};
// 		};
// 	};
// }

// const curried_sum = curring(sum);
// const ans = curried_sum(2)(3)(5);
// console.log("ans: ", ans);

const userObj = {
	name: "Manish",
	age: 23,
};

function userInfo(obj) {
	return function (userInfo) {
		return obj[userInfo];
	};
}

let res = userInfo(userObj);
console.log("res: ", res("age"));

// function sum(a, b) {
// 	return a + b;
// }
// // sum(2, 3);
// // console.log("sum(2,3): ", sum(2, 3));

// function curring(fn) {
// 	return function (a) {
// 		return function (b) {
// 			return fn(a, b);
// 		};
// 	};
// }

// let curried = curring(sum);
// console.log(curried(2)(3));
