const reverseString = (s) => {
	// todo
	if (!s.length) {
		return "";
	}
	return reverseString(s.slice(1)) + s.slice(0, 1);
};
