const sumNumbersRecursive = (numbers) => {
	if (!numbers.length) {
		return 0;
	}
	return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};
