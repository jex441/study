const largestComponent = (graph) => {
	let highest = 0;
	let visited = new Set();

	for (let key in graph) {
		let val = explore(graph, key, visited);
		if (val > highest) {
			highest = val;
		}
	}
	return highest;
};

const explore = (graph, current, visited) => {
	if (visited.has(current)) return 0;

	visited.add(current);

	let size = 1;

	for (let neighbor of graph[current]) {
		size += explore(graph, neighbor, visited);
	}

	return size;
};
