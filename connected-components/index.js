const connectedComponentsCount = (graph) => {
	let count = 0;
	let visited = new Set();
	for (let node in graph) {
		if (explore(graph, node, visited) === true) {
			count += 1;
		}
	}
	return count;
};

const explore = (graph, current, visited) => {
	if (visited.has(String(current))) return false;
	visited.add(String(current));

	for (let neighbor of graph[current]) {
		explore(graph, neighbor, visited);
	}

	return true;
};
