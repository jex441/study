const getNodeValue = (head, index) => {
	let count = 0;

	while (head) {
		if (count === index) {
			return head.val;
		} else {
			count += 1;
			head = head.next;
		}
	}

	return null;
};
