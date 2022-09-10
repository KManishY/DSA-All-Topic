//? A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//?In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
//?Every closure has three scopes:
//?Local scope (Own scope)
//?Enclosing scope (can be block, function, or module scope)
//?Global scope

const makeFunc = () => {
	const firstName = "Manish";
	const lastName = "'Kumar";
	const displayName = () => {
		console.log(firstName);
	};
	console.log(lastName);
	return displayName;
};

const myFunc = makeFunc();
myFunc();

// Kumar
// Manish

// let c = 10;
function A(a) {
	return function B(b) {
		return function C(c) {
			return a + b + c;
		};
	};
}

console.log(A(2)(3)(12));

//17
