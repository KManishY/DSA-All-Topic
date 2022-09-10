var t = -1;
var MAX = 5;
var a = Array(MAX).fill(0); // Maximum size of Stack

function isEmpty() {
	return t < 0;
}

function push(x) {
	if (t >= MAX - 1) {
		console.log("Stack Overflow");
		return false;
	} else {
		t += 1;
		a[t] = x;

		console.log(x + " pushed into stack");
		return true;
	}
}

function pop() {
	if (t < 0) {
		console.log("Stack Underflow");
		return 0;
	} else {
		var x = a[t];
		t -= 1;
		return x;
	}
}

function peek() {
	if (t < 0) {
		console.log("Stack Underflow");
		return 0;
	} else {
		var x = a[t];
		return x;
	}
}

function print() {
	for (i = t; i > -1; i--) {
		console.log(" " + a[i]);
	}
}

push(10);
push(20);
push(30);
push(10);
push(20);
push(30);
// console.log(pop() + " Popped from stack");
console.log("Top element is :" + peek());
console.log("Elements present in stack : ");
print();
