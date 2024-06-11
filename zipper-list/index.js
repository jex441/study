const zipperLists = (head1, head2) => {
	let count = 0;
	let currentNode = head1;
	let pointer1 = head1.next;
	let pointer2 = head2;

	while (pointer1 !== null && pointer2 !== null) {
		if (count % 2 === 0) {
			// if even, change current node's next to head2's current
			currentNode.next = pointer2;
			// increment head2's current node one down
			pointer2 = pointer2.next;
		} else {
			// if odd, change current node's next to head1's current
			currentNode.next = pointer1;
			// increment head1's current node one down
			pointer1 = pointer1.next;
		}
		// increment current node to the new next node
		currentNode = currentNode.next;
		// increment count to alternate list
		count += 1;
	}

	if (pointer1 !== null) currentNode.next = pointer1;
	if (pointer2 !== null) currentNode.next = pointer2;

	return head1;
};
