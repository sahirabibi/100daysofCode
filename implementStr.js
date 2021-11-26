var strStr = function (haystack, needle) {
	if (needle === '') return 0;
	if (haystack === '' && needle.length > 1) return -1;
	let num = needle.length;
	let found = -1;

	// iterate over haystack
	for (let i = 0; i < haystack.length - num + 1; i++) {
		if (haystack[i] === needle[0]) {
			found = i;
			for (let j = 0; j < needle.length; j++) {
				if (haystack[i + j] !== needle[j]) {
					found = -1;
					break;
				} else if (j === needle.length - 1) {
					return found;
				}
			}
		}
	}

	return found;
};
