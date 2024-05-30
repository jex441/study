const mostFrequentChar = (s) => {
	let count = {};
	for (let char of s) {
		if (!count[char]) {
			count[char] = 1;
		} else {
			count[char] += 1;
		}
	}

	let highest = 0;
	let letter = "";
	for (let key in count) {
		if (count[key] > highest) {
			highest = count[key];
			letter = key;
		}
	}
	return letter;
};
