// EXCEPTION: ARRAY MUST BE SORTED
// solution 1 
// use one pointer for find unique values in array
function findUnique(arr) { 
    // assume array is sorted
    if (!arr.length) {
        return 0;
    }
    let counter = 0;
    let start = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[start] !== arr[start + 1]) {
            counter++;
        }
        start++;
    }
    return counter;
}

findUnique([1, 1, 1, 2, 3])

// solution 2: use two pointers to find unique values in array
// Note: Solution only valid in case where alteration of original array is allowed.

function findUniqu2(arr) { 
    // assume array is sorted
    if (!arr.length) {
        return 0;
    }
    let start1 = 0; 
    let start2 = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[start1] !== arr[start1]) {
            // move start1 up by 1 and set this value to the unique value found at arr[start2]
            start1++;
            arr[start1] = arr[start2]
        }
        start2++;
    }
    // return the index of start1 to get total unique values in array
    return arr[start1];
}


// Time Complexity: O(N)
// Space Complexity: O(1)
