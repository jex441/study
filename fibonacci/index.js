const fib = (n, m = {}) => {
	if (n === 1) return 1;
	if (n === 0) return 0;

	if (n in m) {
		return m[n];
	}
	m[n] = fib(n - 1, m) + fib(n - 2, m);
	return m[n];
};
