const treeIncludes = (root, target) => {
	if (root === null) return false;

	let stack = [root];

	while (stack.length > 0) {
		let current = stack.pop();
		if (current.val === target) {
			return true;
		} else {
			if (current.right) stack.push(current.right);
			if (current.left) stack.push(current.left);
		}
	}

	return false;
};
