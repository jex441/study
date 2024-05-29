const compress = (s) => {
	let string = "";
	let k = 0;
	let j = 0;

	while (k <= s.length) {
		if (s[j] === s[k]) {
			k += 1;
		} else {
			let count = k - j;
			if (count === 1) {
				string += s[j];
			} else {
				string += count + s[j];
			}
			j = k;
		}
	}
	return string;
};
