const intersection = (a, b) => {
	let set = new Set();
	let result = [];

	for (let char of a) {
		set.add(char);
	}

	for (let char of b) {
		if (set.has(char)) {
			result.push(char);
		}
	}

	return result;
};
