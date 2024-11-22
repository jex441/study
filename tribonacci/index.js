const tribonacci = (n, m = {}) => {
	if (n === 0) return 0;
	if (n === 1) return 0;
	if (n === 2) return 1;

	if (m[n]) return m[n];

	m[n] = tribonacci(n - 1, m) + tribonacci(n - 2, m) + tribonacci(n - 3, m);

	return m[n];
};
