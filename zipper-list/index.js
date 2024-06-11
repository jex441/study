const zipperLists = (head1, head2) => {
	let count = 0;
	let mergedList = head1;
	let current1 = head1.next;
	let current2 = head2;

	while (current1 !== null && current2 !== null) {
		if (count % 2 === 0) {
			// change current merged list's next to head2's current node
			mergedList.next = current2;
			// if even, increment head2's current node one down
			current2 = current2.next;
		} else {
			// change current merged list's next to head1's current node
			mergedList.next = current1;
			// if odd, increment head1's current node one down
			current1 = current1.next;
		}
		// increment merged list to the new next node
		mergedList = mergedList.next;
		count += 1;
	}

	if (current1 !== null) mergedList.next = current1;
	if (current2 !== null) mergedList.next = current2;

	return head1;
};
