// keep splitting it up into smaller arrays until the length of the array is 1 or 0
function merge(arr1, arr2) {
	let res = [];
	// create pointers
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		// edge case of equality!
		if (arr1[i] <= arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		res.push(arr[i]);
	}

	while (j < arr1.length) {
		res.push(arr[j]);
	}

	return res;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // call mergeSort on two halves of the array
    // split the arrays into two halves 
    let mid = Math.floor(arr.length/2)
    let right = arr.slice(0, mid);
    let left = arr.slice(mid);

    // by continuously calling mergeSort on each side, you split each half over and over again
    mergeSort(right);
    mergeSort(left);

    return merge(left, right);

}

// big O of MergeSort 
// O(n logn) (average)
// O(n logn)
// O(n) => space complexity 