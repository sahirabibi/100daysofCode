var isValid = function (s) {
	// use a stack and pop things off everytime you reach a closing bracket
	// if stack is not empty by the time you reach the end of the string, false : true
	let obj = { '(': ')', '[': ']', '{': '}' };
	// if open is closed by same type of bracket
	// brackets closed in correct order
	if (s.length % 2 !== 0) {
		return false;
	}
	let stack = []; // [[(
	for (let i = 0; i < s.length; i++) {
		if (obj.hasOwnProperty(s[i])) {
			stack.push(s[i]);
		} else {
			if (stack.length < 1) {
				return false;
			} else {
				if (obj[stack[stack.length - 1]] === s[i]) {
					stack.pop();
				} else {
					return false;
				}
			}
		}
	}
	return stack.length < 1;
};
