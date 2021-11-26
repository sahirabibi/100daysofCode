// easiest to solve through recursion
// until you have array with one item 
// pivot (all number less, move to one side)
// 
// pivot helper 

// given an array, store pivot in the var

function pivot(arr, start=0, end=arr.length+1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;    
    }
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    // return the index where the new element is moved to
    return swapIndex;

}

function quickSrt(arr, left=0, right=arr.length -1) {
    if (left < right) {
			let pivotIndex = pivot(arr, left, right); // 3
			// left
			quickSrt(arr, left, pivotIndex - 1);
			// right
			quickSrt(arr, pivotIndex + 1, right);
			// hit subarr that is one element
	}
    return arr;
    
}

// quick sort time complexity => O(n logn)

console.log(quickSrt([100, -2, 1, 32, 12, 543, 12]))