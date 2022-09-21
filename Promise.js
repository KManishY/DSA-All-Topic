// const promise = new Promise((resolve, reject) => {
// 	let sum = 1 + 1;
// 	if (sum == 2) {
// 		resolve("Sucess");
// 	} else {
// 		reject("Wrong numbers");
// 	}
// });

// promise.then((message) => {
// 	console.log(`Message of Success is ${message}`);
// });

// promise.catch((err) => {
// 	console.log(`Message of Failure is ${err}`);
// });

let promise = new Promise((resolve, reject) => {
	let sum = 1 + 1;

	if (sum === 3) {
		resolve(`sum is ${sum}`);
	} else {
		reject(`beacuse sum is not metched`);
	}
});

promise.then((message) => {
	console.log(`promise message is ${message}`);
});
promise.catch((err) => {
	console.log(`the err is ${err}`);
});
