const pairSum = (numbers, targetSum) => {
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i !== j && numbers[i] + numbers[j] === targetSum) {
				result.push(i, j);
				return result;
			}
		}
	}
};
