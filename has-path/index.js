const hasPath = (graph, src, dst) => {
	let stack = [src];

	while (stack.length > 0) {
		let current = stack.pop();

		for (let neighbor of graph[current]) {
			if (neighbor === dst) {
				return true;
			}
			stack.push(neighbor);
		}
	}
	return false;
};
