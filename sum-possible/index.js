const sumPossible = (amount, numbers, m = {}) => {
	if (amount in m) return m[amount];
	if (amount < 0) {
		return false;
	}
	if (amount === 0) {
		return true;
	}
	if (amount in m) {
		return false;
	}

	for (let num of numbers) {
		if (sumPossible(amount - num, numbers, m) === true) {
			m[amount] = true;
			return true;
		}
	}

	m[amount] = false;
	return false;
};
