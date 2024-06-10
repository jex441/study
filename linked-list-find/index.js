const linkedListFind = (head, target) => {
	while (head) {
		if (head.val === target) {
			return true;
		} else {
			head = head.next;
		}
	}

	return false;
};
