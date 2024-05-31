const pairProduct = (numbers, targetProduct) => {
	// todo
	// hashmap
	let count = {};
	// loop numbers
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		// find compliment by dividing target by i
		let compliment = targetProduct / numbers[i];
		// if compliment in map, return i + compliment
		if (compliment in count) {
			return [i, count[compliment]];
		} else {
			count[numbers[i]] = i;
		}
	}
	return result;
};
