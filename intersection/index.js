const intersection = (a, b) => {
	// todo
	// make a hashmap
	let map = {};
	let result = [];

	for (let char of a) {
		map[char] = 1;
	}

	for (let char of b) {
		if (!map[char]) {
			map[char] = 1;
		} else {
			map[char] += 1;
		}
	}

	for (let key in map) {
		if (map[key] > 1) {
			result.push(Number(key));
		}
	}
	return result;
};
