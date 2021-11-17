function countingValleys(steps, path) {
	// 8 [UDDDUDUU]

	// Write your code here
	// valley = consecutive steps below
	let start = 0;
	let vallies = 0;
	for (let i = 0; i < path.length; i++) {
		if (path[i] === 'U') {
			start += 1;
		} else {
			start -= 1;
		}
		if (start === 0 && path[i] === 'U') {
			vallies++;
		}
	}
	return vallies;
}
