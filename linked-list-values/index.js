const linkedListValues = (head) => {
	let result = [];
	while (head !== null) {
		result.push(head.val);
		head = head.next;
	}
	return result;
};

const linkedListValuesRecursive = (head) => {
	const result = [];
	_linkedListValuesRecursive(head, result);
	return result;
};

const _linkedListValuesRecursive = (head, result) => {
	if (head === null) return;
	result.push(head.val);
	_linkedListValuesRecursive(head.next, result);
};
