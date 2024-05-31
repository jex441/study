const fiveSort = (nums) => {
	let i = 0;
	let j = nums.length - 1;

	while (i <= j) {
		let left = nums[i];
		let right = nums[j];

		if (nums[i] === 5 && nums[j] !== 5) {
			nums[i] = right;
			nums[j] = left;
			i += 1;
			j -= 1;
		}
		if (left !== 5) {
			i += 1;
		}
		if (right === 5) {
			j--;
		}
	}
	return nums;
};
