const anagrams = (s1, s2) => {
	let count = {};
	for (let char of s1) {
		if (!count[char]) {
			count[char] = 1;
		} else {
			count[char] += 1;
		}
	}
	for (let char of s2) {
		if (!count[char]) {
			return false;
		} else {
			count[char] -= 1;
		}
	}

	for (let char in count) {
		if (count[char] !== 0) {
			return false;
		}
	}
	return true;
};
