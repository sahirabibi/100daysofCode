// basic solution 
// using pointers to scan list 
// decide whether to add the current val and go forward one step
// add the difference of two values and move forward to steps


var romanToInt = function (s) {
	// largest -> smallest
	// except when the RN is less than the following digit, subtract
	let numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		if (numerals[s[i]] < numerals[s[i + 1]]) {
			sub = numerals[s[i + 1]] - numerals[s[i]];
			sum += sub;
			i++;
		} else {
			sum += numerals[s[i]];
			console.log(sum);
		}
	}

	return sum;
};

// left to right pass Improved 
// create unique 13 value dictionary and iterate accordingly 
// check if str[i] + str[i + 1] are in obj? Return value, i+=2
// else, add normally


// Elegant Solution 
// either add or subtract the current symbol based on its neighbor
// start at the end and look to the left value to determine approach

function refactorRoman(str) {
    let total = 0;
    let numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = str.length - 1; i >= 0; i--) {
        if (numerals[str[i]] < numerals[str[i - 1]]) {
            total -= numerals[str[i]];
        } else {
            total += numerals[str[i]]
        }
    }
    return total;
}