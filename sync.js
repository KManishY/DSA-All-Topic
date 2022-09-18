function bcd() {
	setTimeout(() => {
		console.log("second");
	}, 5000);
}

function abc() {
	console.log("first");
	bcd();
	console.log("end");
}

abc();
