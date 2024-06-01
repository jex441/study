const sumOfLengths = (strings) => {
	// todo
	if (!strings.length) {
		return 0;
	}

	return strings[0].length + sumOfLengths(strings.slice(1));
};
