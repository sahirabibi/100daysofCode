function sockMerchant(n, ar) {
	// Write your code here
	// find the number of unique values in the array
	// get count, if odd -> -1 and divide by 2 to get # of pairs of that sock
	let obj = {};
	for (let i = 0; i < ar.length; i++) {
		obj[ar[i]] ?  obj[ar[i]]++ : obj[ar[i]] = 1;
	}
	let pairs = 0;
	for (let property in obj) {
		if (obj[property] % 2 !== 0) {
			pairs += (obj[property] - 1) / 2;
		} else {
			pairs += obj[property] / 2;
		}

	}

	return pairs;

}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))
