//?Subarray and Sum
//! Given an array of integers of length n and a positive integer K,
//!the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.

const SubarraySum = (n, k, arr) => {
	let left = 0;
	let right = n - 1;
	let count = 0;

	for (let i = 0; i < n; i++) {
		let sum = 0;
		let str = "";
		for (let j = i; j < n; j++) {
			sum += arr[j];
			str += arr[j];
			if (str.length == k && sum % k !== 0) {
				count++;
			}
			// console.log("str: ", str);
		}
	}
	console.log("max: ", count);
};
function runProgram(input) {
	input = input.trim().split(`\n`);
	let [n, k] = input[0].trim().split(` `).map(Number);
	let arr = input[1].trim().split(` `).map(Number);
	SubarraySum(n, k, arr);
}
//-----------------------------------------------------------//
if (process.env.USERNAME === "asus") {
	runProgram(`5 3
2 4 3 5 1`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}
