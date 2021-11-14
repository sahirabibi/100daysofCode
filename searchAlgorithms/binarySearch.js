// eliminate half of the remaining elements at any given time
// NEEDS TO BE SORTED

// Divide and Conquer 
// Pick pivot point in the middle 
function binarySearch(arr, value) {
	// [1, 22, 31, 40, 54, 66] 44
	let right = 0;
	let left = arr.length - 1; // 4
	let middle = Math.floor((left + right) / 2); 
	while (arr[middle] !== value && right <= left) {
		if (arr[middle] > value) {
			left = middle - 1;
		} else if (arr[middle] < value) {
			right = middle + 1; // 3
		}
        middle = Math.floor((left + start) / 2);
	}
    return arr[middle] === elem ? middle : -1;

}

// big O -> O(log n)