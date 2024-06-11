const mergeLists = (head1, head2) => {
	let dummy = new Node(null);
	let currentNode = dummy;
	let current1 = head1;
	let current2 = head2;

	while (current1 && current2) {
		if (current1.val < current2.val) {
			currentNode.next = current1;
			current1 = current1.next;
		} else {
			currentNode.next = current2;
			current2 = current2.next;
		}
		currentNode = currentNode.next;
	}

	if (current1) currentNode.next = current1;
	if (current2) currentNode.next = current2;

	return dummy.next;
};
