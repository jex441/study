const addLists = (head1, head2) => {
	let dummyNode = new Node(null);
	let tail = dummyNode;
	let carry = 0;

	while (head1 !== null || head2 !== null || carry !== 0) {
		let first = head1?.val || 0;
		let second = head2?.val || 0;

		let sum = first + second + carry;
		carry = sum > 9 ? 1 : 0;

		tail.next = new Node(sum % 10);
		tail = tail.next;

		if (head1 !== null) head1 = head1.next;
		if (head2 !== null) head2 = head2.next;
	}
};
