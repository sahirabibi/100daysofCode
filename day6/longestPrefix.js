var longestCommonPrefix = function (strs) {
	//
	// iterate over each string,
	// keep track of matching chrs
	// for each str
	// subStr = ''
	// if chr matches the first chr in the match, continue a new loop, comparing the remaining string,
	// if you reach a point where there isn't match
	// set match = subStr
	// if you reach end of the current str, and no matches at ALL, return ''

	let match = strs[0]; // ab

	for (let i = 1; i < strs.length; i++) {
		let curr = strs[i]; // a
		let subStr = '';
		for (let j = 0; j < curr.length; j++) {
			if (curr[j] === match[j] && j < curr.length) {
				subStr += curr[j];
			} else {
				match = subStr;
				if (match === '') {
					return '';
				}
			}
		}
		match = subStr;
	}
	return match;
};


// match = str[0]
// i = 1;
// 
// while i < strs