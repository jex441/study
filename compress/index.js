const compress = (s) => {
	let string = "";
	let k = 0;
	let j = 0;
	let count = 0;
	let total = 0;

	if (s.length === 1) {
		return "1" + s;
	}

	while (total < s.length) {
		if (s[j] === s[k]) {
			k += 1;
			count += 1;
		} else {
			if (count === 1) {
				string += s[j];
			} else {
				string += count + s[j];
			}

			total += count;
			j = total;
			k = total;
			count = 0;
		}
	}
	return string;
};
