const uncompress = (s) => {
	let output = "";
	let j = 0;
	let multiplier = "";
	let nums = "0123456789";

	while (j < s.length) {
		if (nums.includes(s[j])) {
			multiplier += s[j];
		} else {
			for (let k = 0; k < parseInt(multiplier); k++) {
				output += s[j];
			}
			multiplier = "";
		}
		j += 1;
	}
	return output;
};
