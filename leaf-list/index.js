const leafList = (root) => {
	if (root === null) return [];
	let result = [];
	let stack = [root];

	while (stack.length > 0) {
		let current = stack.pop();

		if (current.right !== null) stack.push(current.right);
		if (current.left !== null) stack.push(current.left);

		if (current.left === null && current.right === null) {
			result.push(current.val);
		}
	}

	return result;
};
