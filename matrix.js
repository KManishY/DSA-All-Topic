//! Rotate the matrix by 90 degree in anti-clockwise

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// afterRotation = [
// 	[3, 6, 9],
// 	[2, 5, 8],
// 	[1, 4, 7],
// ];

let n = matrix.length;
for (let i = 0; i < n; i++) {
	for (let j = i; j < n - i - 1; j++) {
		// 0
		let temp = matrix[i][j]; //1
		matrix[i][j] = matrix[j][n - i - 1]; //[1  3]
		matrix[j][n - i - 1] = matrix[n - i - 1][n - j - 1]; // [3 7]
		matrix[n - i - 1][n - j - 1] = matrix[n - j - 1][i]; // [7 1]
		matrix[n - j - 1][i] = temp;
	}
}
console.log(matrix);

// let matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// let n = matrix.length;

// afterRotation = [
// 	[3, 6, 9],
// 	[2, 5, 8],
// 	[1, 4, 7],
// ];

// let arr = [];

// for (let i = 0; i < n; i++) {
// 	let insideArr = [];
// 	for (let j = 0; j < n; j++) {
// 		let a = matrix[j][n - i - 1];
// 		insideArr.push(a);
// 	}
// 	// console.log(insideArr);
// 	arr.push(insideArr);
// }
// console.log(arr);
