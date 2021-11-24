// insertion sort 
// best case can be when data is coming in live 
// builds up the sort by gradually creating a larger half which is always sorted 
// start by picking the second element in the array
// now compare the second element with the one before it and swap if necessary
// continue to the next element nd if it is in the incorrect order, iterate through the sorted portion and place the element in the correct place.
// repeat until the array is sorted

// [21, 89, 3, 79, 12]
// [21] 
// arr[0] > 89?
// place 89 one spot before the


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            console.log(arr)    
        }
        arr[j + 1] = currentVal;
    }

    return arr;

}

// O(N2)
// Elementry O(N2) for all 