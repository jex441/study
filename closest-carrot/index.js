const closestCarrot = (grid, startRow, startCol) => {
	let visited = new Set();

	let queue = [{ pos: [startRow, startCol], count: 0 }];
	while (queue.length > 0) {
		let { pos, count } = queue.shift();
		let [r, c] = pos;
		let check = explore(grid, r, c, queue, visited, count);
		if (check) {
			return count;
		}
	}
	return -1;
};

const explore = (grid, r, c, queue, visited, count) => {
	let rowInBounds = 0 <= r && r < grid.length;
	let colInBounds = 0 <= c && c < grid[0].length;
	if (!rowInBounds || !colInBounds) {
		return false;
	}
	let string = String(r) + "," + String(c);
	if (visited.has(string)) {
		return false;
	}
	visited.add(string);

	if (grid[r][c] === "W") {
		return false;
	}

	if (grid[r][c] === "C") {
		return true;
	}

	let newCount = count + 1;
	if (grid[r][c] === "O") {
		let a = { pos: [r + 1, c], count: newCount };
		let b = { pos: [r - 1, c], count: newCount };
		let x = { pos: [r, c + 1], count: newCount };
		let d = { pos: [r, c - 1], count: newCount };
		queue.push(a);
		queue.push(b);
		queue.push(x);
		queue.push(d);
	}

	return false;
};
