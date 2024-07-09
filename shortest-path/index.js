const shortestPath = (edges, nodeA, nodeB) => {
	let graph = {};

	for (let el of edges) {
		let [a, b] = el;
		if (!graph[a]) {
			graph[a] = [];
		}
		if (!graph[b]) {
			graph[b] = [];
		}
		if (graph[a]) {
			graph[a].push(b);
		}
		if (graph[b]) {
			graph[b].push(a);
		}
	}

	let queue = [[nodeA, 0]];
	let visited = new Set([nodeA]);

	while (queue.length > 0) {
		let [current, idx] = queue.shift();

		if (current === nodeB) {
			return idx;
		}
		for (let neighbor of graph[current]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push([neighbor, idx + 1]);
			}
		}
	}
	return -1;
};

const explore = (graph, current, target, visited) => {
	if (visited.has(current)) {
		return 0;
	}
	if (current === target) {
		return 1;
	}
	visited.add(current);
	let count = 1;
	count += explore(graph, current, target, visited);
	return count;
};
