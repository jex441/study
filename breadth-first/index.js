const breadthFirstValues = (root) => {
	if (root === null) return [];
	// declare result array
	let result = [];
	// declare queue
	let queue = [root];
	// while queue.length
	while (queue.length > 0) {
		let current = queue.pop();
		result.push(current.val);
		if (current.left) queue.unshift(current.left);
		if (current.right) queue.unshift(current.right);
	}

	return result;
};
