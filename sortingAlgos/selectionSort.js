//places small values into sorted positions
//store the first element as the smallest value you've seen so far
//compare this element to the next item in the array until you find a smaller number
// if the minimum is not hte value you initially began with, swap the two values
// repeat this with the next element until the array is sorted 

function selectionSortAttempt(arr) { // [15, 5, 10, 6]
    let min = 0;
    for (let i = 0; i < arr.length; i++) {   // i = 1   
        if (arr[min] > arr[i + 1]) {
            let temp = arr[min]; 
            arr[min] = arr[i + 1] 
            arr[i + 1] = temp; 
            min = i + 1;     

        }
    }
    return arr;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length;j++) {
            if (arr[min] > arr[j]) {
                min = j;    
            }
            // swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 15, 10, 6]))