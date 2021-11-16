// a sorting algorithm -> largest values will bubble to the top
// compare the values next to each other and swap if it is larger 

// function swap(arr, idx1, idx2) {
//     let temp = arr[idx];
//     arr[idx] = arr[idx2];
//     arr[idx2] = temp
// }

// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
// }

// start looping from the end towards the beginning 
// start with an inner loop with var j from the beginning of the array until i - 1
// it arr[j] is greater than arr[j+1]; swap those two values
// return sorted array


// [12, 23, 11, 52, 82, 11, 43] 
// i = 6
// j = 0


function bubbleSort(arr) {
    console.log("Array:", arr)
    let swaps;
    for (let i =arr.length; i > 0; i--) {
        console.log('i: ', i)
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log('j: ', j)
            console.log(arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                console.log('SWAP')
                console.log(arr[j], arr[j+1])
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                noSwaps = false;

            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([42, 12, 48, 18, 10, 99, 1]))

// O(N2)