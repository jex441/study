const insertNode = (head, value, index) => {
	let count = 0;
	let newNode = new Node(value);
	let current = head;

	if (index === 0) {
		const newHead = new Node(value);
		newHead.next = head;
		return newHead;
	}

	while (current) {
		if (count === index - 1) {
			const next = current.next;
			current.next = new Node(value);
			current.next.next = next;
			return head;
		}
		count += 1;
		current = current.next;
	}
};
