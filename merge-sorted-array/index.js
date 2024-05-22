var merge = function (nums1, m, nums2, n) {
	// Start from the end of both arrays
	let i = m - 1; // Last index of initial elements in nums1
	let j = n - 1; // Last index of nums2
	let k = m + n - 1; // Last index of nums1

	// Merge nums2 into nums1 from the end
	while (j >= 0) {
		//Compare both ints in desc order, ie the two greatest numbers in both arrays, add the larger of the two to the
		//current index of nums1, and decrement the index of the array from which we took the integer
		if (i >= 0 && nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}
};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
