const palindrome = (s) => {
	if (s.length <= 1) {
		return true;
	} else if (s[0] !== s.slice(-1)) {
		return false;
	}
	return palindrome(s.slice(-1));
};
