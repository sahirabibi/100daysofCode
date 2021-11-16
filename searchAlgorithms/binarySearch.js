// eliminate half of the remaining elements at any given time
// NEEDS TO BE SORTED

// Divide and Conquer 
// Pick pivot point in the middle 
function binarySearch(arr, value) {
	// [1, 22, 31, 40, 54, 66] 44
	let right = 0;
	let left = arr.length - 1; // 4
	let middle = Math.floor((left + right) / 2); 
	while (arr[middle] !== value && right <= left) {
		if (arr[middle] > value) {
			left = middle - 1;
		} else if (arr[middle] < value) {
			right = middle + 1; // 3
		}
        middle = Math.floor((left + start) / 2);
	}
    return arr[middle] === elem ? middle : -1;

}

// big O -> O(log n)

/ many ways of sorting things
// right, left, middle
// compare the target value with the middle
// larger ? move right up
// smaller ? move left down
// define new middle point between the two ends
// as long as right is less than left and the two have not stepped over one another

// [1, 21, 45, 65, 77, 900]
// target = 20 
// right = 1;
// left = 900;
// middle = 2 -> 45 
// 45 > 21 
// MIDDLE DOES NOT EQUAL TARGET
// left = 2
// right = 0
// middle = ( 0 + 2 ) / 2 => 1

// MIDDLE DOES NOT EQUAL TARGET
// 21 > 20 
// left = (45)  --> 2
// right = 0 --> 0 
// middle = 2 + 0 / 2 = 1
// middle = 21
// left = 1
// right = 0;
// middle = 1 + 0 / 2 => 0 
// right AND left = SAME INDEX

function binarySearch2(arr, target) {
    let right = 0;
    let left = arr.length - 1;
    let middle = Math.floor(((right + left) / 2)) 

    while (arr[middle] !== target && right <= left) {
        if (arr[middle] > target) {
            left = middle - 1;
        }
        else if (arr[middle] < target) {
            right = middle + 1;
        }
        middle = Math.floor(((right + left) / 2))
        
    }

    return arr[middle] === target ? middle : -1;

}


console.log(binarySearch2([1, 2, 3, 4, 5, 6 , 7], 2))

