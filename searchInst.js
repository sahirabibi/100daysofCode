var searchInsert = function (nums, target) {
	// find a midpoint, if target < midpoint
	// let right = new nums
	// midpoint thing again
	// if arr.length === 1

	function search(arr, target) {
		// [1,3,5,6] , 2

		if (arr.length === 1 && arr[0] !== target) {
			if (arr[0] < target) {
				let idx = nums.indexOf(arr[0]) - 1;
				return idx !== -1 ? idx : 0;
			} else {
				return nums.indexOf(arr[0]) + 1;
			}
		}
		let right = arr.length - 1;
		let left = 0;
		let mid = 0;
		while (nums[mid] !== target && left < right) {
			mid = Math.floor((left + right) / 2);
			if (nums[mid] < target) {
				// search right;
				right = nums.slice(mid + 1);
				search(right, target);
			} else {
				// search left
				left = nums.slice(0, mid);
				search(left, target);
			}
		}
		return mid;
	}

	let idx = search(nums, target);
	return idx;
};
