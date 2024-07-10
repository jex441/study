const islandCount = (grid) => {
	let visited = new Set();
	let count = 0;

	for (let r = 0; r < grid.length; r += 1) {
		for (let c = 0; c < grid[0].length; c += 1) {
			if (explore(grid, r, c, visited) === true) {
				count += 1;
			}
		}
	}
	return count;
};

const explore = (grid, r, c, visited) => {
	const rowInbounds = 0 <= r && r < grid.length;
	const colInbounds = 0 <= c && c < grid[0].length;
	if (!rowInbounds || !colInbounds) return false;

	if (grid[r][c] === "W") {
		return false;
	}

	const current = r + "," + c;
	if (visited.has(current)) {
		return false;
	}
	visited.add(current);

	explore(grid, r, c + 1, visited);
	explore(grid, r, c - 1, visited);
	explore(grid, r + 1, c, visited);
	explore(grid, r - 1, c, visited);

	return true;
};
