const treeLevels = (root) => {
	let result = [];
	let queue = [root];

	if (root === null) {
		return [];
	}

	while (queue.length > 0) {
		let currentLevel = queue;
		let vals = currentLevel.map((node) => {
			if (node) {
				return node.val;
			}
		});
		result.push(vals);

		// Clear current queue and make next iteration queue:
		queue = [];
		currentLevel.forEach((node) => {
			if (!node) {
				return null;
			}
			if (node.left !== null) {
				queue.push(node.left);
			}
			if (node.right !== null) {
				queue.push(node.right);
			}
		});
	}

	return result;
};
