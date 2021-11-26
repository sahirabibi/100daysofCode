var plusOne = function (digits) {
	// 15999 5 - 1 = 4 - 1
	if (digits[digits.length - 1] !== 9) {
		return [
			...digits.slice(0, digits.length - 1),
			digits[digits.length - 1] + 1,
		];
	}
	// if last num = 9, iterate backwards until you reach num != 9
	// num + 1, everything after -> 0
	// before num + num + numOfZeroes = (digits.length - num - 1
	for (let i = digits.length - 1; i >= 0; i--) {
		// 0, 0
		if (digits.length < 2) {
			return [1, 0];
		} else if (digits[i] === 9) {
			digits[i] = 0;
			console.log(digits);
		} else {
			digits[i]++;
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};
