//           [5, 2, 4, 3, 1]
//         [5, 2, 4]  |   [3, 1]
//     [5, 2]    [4]  |   [3]   [1]
//   [5]   [2]   [4]  |   [3]   [1]

//   [5]   [2]   [4]  |   [3]   [1]
//      [2, 5]   [4]  |   [1, 3]
//      [2, 4, 5]     |   [1, 3]
//            [1, 2, 3, 4, 5]



function merge(leftArr, rightArr) {
	const sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	return [...sortedArr, ...leftArr, ...rightArr];
}
function mergeSort(arr) {
	if (arr.length < 2) return arr;

	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}
const arr = [12, 11, 13, 5, 6, 7];
console.log("mergeSort(arr): ", mergeSort(arr));


 