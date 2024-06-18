const treeMinValue = (root) => {
	// declare val
	let val = root.val;
	let queue = [root];
	// implement bfs
	while (queue.length > 0) {
		let current = queue.shift();

		if (current.val < val) {
			val = current.val;
		}
		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}

	return val;
};
