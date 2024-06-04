const sumList = (head) => {
	let result = 0;
	while (head !== null) {
		result += head.val;
		head = head.next;
	}
	return result;
};
