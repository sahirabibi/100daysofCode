var removeDuplicates = function (nums) {
	// [1, 2, 3, 3, 3]
	// duplicate removed, add remaing nums at the start and everything else, to the end
	// iterate over array
	// if nums[i] === nums[i + 1]
	// nums[i] = Infinitey
	// m++
	// i++
	// sort the array in increasing order
	// return nums.length - m
	let m = 0; // 2
	let i = 0;
	for (let i = 0; i < nums.length; i++) {
		// i = 3
		if (nums[i] === nums[i + 1]) {
			m++;
			nums[i] = Infinity;
		}
	}

	nums.sort((a, b) => a - b); // [1, 2, 3, I , I ] 5 - 2 = 3

	return nums.length - m;
};

var removeDuplicates = function (nums) {
	// [0,1,2,3,4,2,2,3,3,4]
	if (nums.length === 0) return 0;
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] !== nums[i]) {
			i++;
			nums[i] = nums[j];
		}
	}

	return i + 1;
};
