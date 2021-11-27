// brute force 
var maximumDifference = function (nums) {
	let max = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (nums[j] > nums[i]) {
				let diff = nums[j] - nums[i];
				max = Math.max(diff, max);
			}
		}
	}

	if (max === -Infinity) return -1;
	return max;
};


// DP (O(N))
var maximumDifference = function (nums) {
	var min = Infinity;
	var diff = -1;
	for (i = 0; i < nums.length; i++) {
		min = Math.min(min, nums[i]);
		diff = Math.max(diff, nums[i] - min);
	}
	return diff == 0 ? -1 : diff;
};