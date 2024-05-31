const factorial = (n) => {
	// todo
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
};
