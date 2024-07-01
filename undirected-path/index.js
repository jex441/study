const undirectedPath = (edges, nodeA, nodeB) => {
	let graph = {};
	for (let pair of edges) {
		let a = pair[0];
		let b = pair[1];

		if (!graph[a]) {
			graph[a] = [];
		}
		if (!graph[b]) {
			graph[b] = [];
		}

		graph[a].push(b);
		graph[b].push(a);
	}

	let stack = [nodeA];
	let visited = new Set();

	while (stack.length > 0) {
		let current = stack.pop();
		for (let neighbor of graph[current]) {
			if (neighbor === nodeB) return true;

			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.add(neighbor);
			}
		}
	}

	return false;
};
