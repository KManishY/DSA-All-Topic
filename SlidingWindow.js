// O(n*k) solution for finding maximum sum of
// a subarray of size k

// Returns maximum sum in a subarray of size k.
function maxSum(arr, n, k) {
	// Initialize result
	let max_sum = Number.MIN_VALUE;

	// Consider all blocks starting with i.
	for (let i = 0; i < n - k + 1; i++) {
		let current_sum = 0;
		for (let j = 0; j < k; j++) {
			current_sum = current_sum + arr[i + j];
		}

		// Update result if required.
		max_sum = Math.max(current_sum, max_sum);
	}

	return max_sum;
}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(maxSum(arr, n, k));
