var merge = function (nums1, m, nums2, n) {
	let countM = 0;
	let countN = 0;

	while (countM < m && countN < n) {
		let idx = countM;
		// Skip over 0s, remove them from arrays:
		if (nums1[idx] <= 0) {
			nums1.splice(idx, 1);
			idx += 1;
		}

		if (nums1[idx] <= nums2[countN]) {
			countM += 1;
		} else if (nums1[idx] > nums2[countN]) {
			nums1.splice(idx, 0, nums2[countN]);
			countN++;
		}
	}
	console.log(nums1);
};
