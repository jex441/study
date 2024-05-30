//Hashmap:
const pairSum = (numbers, targetSum) => {
	let count = {};
	for (let i = 0; i < numbers.length; i++) {
		let compliment = targetSum - numbers[i];
		if (compliment in count) {
			return [count[compliment], i];
		} else {
			count[numbers[i]] = i;
		}
	}
};

// Brute force:
// const pairSum = (numbers, targetSum) => {
// 	let result = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		for (let j = 0; j < numbers.length; j++) {
// 			if (i !== j && numbers[i] + numbers[j] === targetSum) {
// 				result.push(i, j);
// 				return result;
// 			}
// 		}
// 	}
// };
