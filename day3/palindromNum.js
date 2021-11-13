var isPalindrome = function (x) {
	// 123321
	// turn it into a string
	// set up pointers on each end of the list
	// if odd
	// if index of start and end pointer is the same
	// end loop and exit, return true
	// if even and I reach center of the list
	// if at any point, the index of start > index of end
	// return true
	// compare each number as I move pointer towards the center, one at a time
	// if at any point, the numbers differ
	// return false
	// else
	// return true
	if (x < 0) return false;
	let strNum = x.toString();
	let start = 0; // 1
	let end = strNum.length - 1; // 1
	for (let i = 1; i < strNum; i++) {
		if (start >= end) {
			return true;
		} else if (strNum[start] !== strNum[end]) {
			return false;
		} else {
			start++; // 1
			end = strNum.length - 1 - i; // 1
		}
	}
	return true;
};
