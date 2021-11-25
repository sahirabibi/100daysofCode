var mergeTwoLists = function (list1, list2) {
	// [1, 2], [1, 2, 3, 4]
	// set two pointers on each list
	// compare the values
	// if list1[i] > list2[j]
	// push list2[j] ; j++

	// if list1 < list2; take remaining values of list2, and spread them to res
	// if list1 > list2;

	if (list1.length < 1 || list2.length < 1) {
		return [...list1, ...list2];
	}
	let res = [];
	let i = 0; // 1
	let j = 0;

	while (i < list1.length && j < list2.length) {
		if (list1[i] <= list2[j]) {
			res.push(list1[i]);
			i++;
		} else {
			res.push(list2[j]);
			j++;
		}
	}
	if (list2.length - 1 > j) {
       return [...res, ...list2.slice(j)]
	}
	if (list1.length - 1 > i) {
		return [...res, ...list1.slice(i)];
	}

    return res;
};


mergeTwoLists([1, 2, 3], [])

console.log(mergeTwoLists([], []));

let arr = [1, 2, 3]
arr[1] = '_'
console.log(arr)
arr.sort((a, b) => (a - b))
console.log(arr)