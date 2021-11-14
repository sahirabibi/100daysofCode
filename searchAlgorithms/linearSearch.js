// indexOf
// includes
// linear search
// check each one at a time and check if its there
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

// time complexity : O(N)

