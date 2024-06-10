function groupTransactions(transactions) {
	let count = {};
	let output = [];

	for (let item of transactions) {
		if (count[item]) {
			count[item] += 1;
		} else {
			count[item] = 1;
		}
	}

	for (let key in count) {
		output.push(key + " " + count[key]);
	}

	output.sort((a, b) => {
		let [itemA, countA] = a.split(" ");
		let [itemB, countB] = b.split(" ");
		countA = parseInt(countA);
		countB = parseInt(countB);

		if (countA === countB) {
			return itemA.localeCompare(itemB);
		} else {
			return countB - countA;
		}
	});
	return output;
}
