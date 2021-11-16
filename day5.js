
// input is valid if open brackets are closed by the same type of closing bracket
// Must be closed in the correct order
// first closing bracket must match the last opening bracket
// length of string must be even
var isValid = function (s) {
	// {[( )]} }])
	if (s.length % 2 !== 0) return false;
	let order = '';
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] === '(') {
			order += ')';
		} else if (s[i] === '{') {
			order += '}';
		} else if (s[i] === '[') {
			order += ']';
		}
	}

	for (let i = order.length - 1; i < 0; i--) {
		// }])
		if (order[i] !== s[i]) { 
			return false;
		}
	}
};
