const treeValueCountWithHelper = (root, target) => {
	let count = 0;

	const _treeValueCount = (root, target) => {
		if (root === null) return null;
		if (root.val === target) count += 1;
		return (
			_treeValueCount(root.left, target) || _treeValueCount(root.right, target)
		);
	};

	_treeValueCount(root, target);

	return count;
};

const treeValueCount = (root, target) => {
	if (root === null) return 0;
	const match = root.val === target ? 1 : 0;

	return (match +=
		treeValueCount(root.left, target) + treeValueCount(root.right, target));
};
