const bottomRightValue = (root) => {
	let queue = [root];
	let visited = [];

	while (queue.length > 0) {
		let current = queue.pop();
		if (current.val) visited.push(current.val);
		if (current.left) queue.unshift(current.left);
		if (current.right) queue.unshift(current.right);
	}

	return visited[visited.length - 1];
};
