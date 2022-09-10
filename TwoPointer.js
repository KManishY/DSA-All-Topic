//? Two Pointer
//? Model 1:=> All the two pointer moves in opposite direction
//? Model 2:=>Both two pointer moves in same direction

//! Moves in opposite direction
//! find a pair whose sum is equal to k[a+b=k]
// let n = 8;
// let l = 0;
// var k = 21;
// let r = n - 1;
// let arr = [7, 4, 9, 6, 21, 8, 11, 17];

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = i + 1; j < arr.length; j++) {
// 		if (arr[i] + arr[j] == k) {
// 			console.log("done");
// 			break;
// 		}
// 	}
// }
//?time complexity of this is n**2
let n = 8; // size of array
let arr = [7, 4, 9, 6, 21, 8, 11, 17];
var k = 21; // target value
let l = 0; // left pointer
let r = n - 1; // right pointer
arr.sort((a, b) => a - b); // sort the array
const twoPointer = (n, l, k, r, arr) => {
	while (l < r) {
		if (arr[l] + arr[r] == k) {
			return true;
		} else if (arr[l] + arr[r] < k) {
			l++;
		} else {
			r++;
		}
	}
	return false;
};

let ans = twoPointer(n, l, k, r, arr);
console.log("ans: ", ans);

//! Find a triplet whose sum is equal to k [a+b+c=k]

// function TriBrute(arr, k) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			for (let k = j + 1; k < arr.length; k++) {
// 				if (arr[i] + arr[j] + arr[k] == k) {
// 					// console.log("done");
// 					return true;
// 				}
// 			}
// 		}
// 	}
// }
// let ans = TriBrute(arr, k);
// console.log("ans: ", ans);

//! seprate two things using two Pointer

// let l = 0;
// let r = arr.length;
// let arr = [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
