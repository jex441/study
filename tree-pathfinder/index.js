// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
	if (root === null) return null;
	if (root.val === target) return [root.val];

	let leftPath = pathFinder(root.left, target);
	if (leftPath !== null) {
		return [root.val, ...leftPath];
	}

	let rightPath = pathFinder(root.right, target);
	if (rightPath !== null) {
		return [root.val, ...rightPath];
	}
	return null;
};
