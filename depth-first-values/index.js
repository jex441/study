// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
	if (root === null) return [];
	// declare a return array
	let result = [];
	// declare a stack array
	let stack = [root];

	// while stack.length
	while (stack.length > 0) {
		console.log(stack);
		let current = stack.pop();
		result.push(current.val);
		if (current.right !== null) stack.push(current.right);
		if (current.left !== null) stack.push(current.left);
	}

	return result;
};
