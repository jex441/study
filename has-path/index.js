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

//Recursive solution:
const _hasPath = (graph, src, dst) => {
	if (src === dst) return true;

	for (let neighbor of graph[src]) {
		if (_hasPath(graph, neighbor, dst) === true) {
			return true;
		}
	}

	return false;
};

// Breadth First Search
const __hasPath = (graph, src, dst) => {
	// declare a queue
	let queue = [src];
	while (queue.length > 0) {
		let current = queue.shift();
		for (let neighbor of graph[current]) {
			if (neighbor === dst) {
				return true;
			} else {
				queue.unshift(neighbor);
			}
		}
	}
	return false;
};
