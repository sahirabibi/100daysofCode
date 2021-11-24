// split array until you get an array with one item
// merge by comparing which array is smaller?

// merge arrays
// create an empty array, take a look at the smallest values in each input array
// if the value in teh first array is smaller than the value in the second array, push the value in the first array into the results and move on to the next value
// if hte value in teh first array is larger than the value in the second array, push the value in teh second array into our results and move on to hte next value in the second array

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
    if (arr.length === 1) return arr;
    // split the array in half
    arr1 = arr.slice(0, Math.floor(arr.length / 2));
    arr2 = arr.slice(Math.floor(arr.length / 2));
    let left = mergeSort(arr1);
    let right = mergeSort(arr2);
    return merge(left, right);

}