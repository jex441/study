const isUnivalueList = (head) => {
	const val = head.val;
	while (head) {
		if (head.val !== val) {
			return false;
		} else {
			head = head.next;
		}
	}
	return true;
};
