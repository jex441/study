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

const linkedListFindRecursive = (head, target) => {
	if (!head) {
		return false;
	}
	if (head.val === target) {
		return true;
	} else {
		return linkedListFindRecursive(head.next, target);
	}
};
