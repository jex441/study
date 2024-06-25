const levelAverages = (root) => {
	if (root === null) {
		return [];
	}

	let queue = [{ node: root, levelNum: 0 }];
	let levels = [];

	while (queue.length > 0) {
		let { node, levelNum } = queue.shift();

		if (levels.length === levelNum) {
			levels[levelNum] = [node.val];
		} else {
			levels[levelNum].push(node.val);
		}

		if (node.right !== null) {
			queue.push({ node: node.right, levelNum: levelNum + 1 });
		}
		if (node.left !== null) {
			queue.push({ node: node.left, levelNum: levelNum + 1 });
		}
	}

	return levels.map((level) => {
		let val = level[0];
		for (let i = 1; i < level.length; i++) {
			val += level[i];
		}
		return val / level.length;
	});
};
