const longestStreak = (head) => {
	let highest = 0;
	let counter = 1;
	let prev = null;

	while (head) {
		if (head.val === prev) {
			counter += 1;
		} else {
			counter = 1;
		}

		if (counter > highest) {
			highest = counter;
		}

		prev = head.val;
		head = head.next;
	}

	return highest;
};
