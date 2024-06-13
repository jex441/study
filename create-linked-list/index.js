class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const createLinkedList = (values) => {
	const head = new Node(values[0]);
	let prev = head;
	if (!values.length) {
		return null;
	}
	for (let i = 1; i < values.length; i++) {
		let current = new Node(values[i]);
		prev.next = current;
		prev = current;
	}

	return head;
};
