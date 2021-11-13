// base case to end recursion
// different input each time 

// simple recursive case 
function countDown(num) {
    if (num < 1) return;
    console.log(num);
    countDown(num - 1);
}

countDown(5);

function sumArray(nums) {
    if (nums.length === 1) return nums[0];
    let num = nums[0]
    nums.shift()
    return num + sumArray(nums)
}

// 1 + sumArray[2, 3, 4] ==> 1 + 2 + sumArray[3, 4] ===> 1 + 2 + 3 + sumArray[4] ===> 1 + 2 + 3 + 4 = > 10

console.log(sumArray([1, 2, 3, 4]))

function sumRange(num) { // 5
    if (num === 1) return 1;
    return num + sumRange(num-1)
}

// recursion compared with for loops
function factorial(num) { // 4
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

// recursive factorial 

function recursiveFactorial(num) { // 4
    if (num === 1) return num;
    return num * recursiveFactorial(num - 1) // 4 * rF(3) ==> 4 * 3 * rF(2) ==> 4 * 3 * 2 * 1 ===> 24
}

console.log(recursiveFactorial(4));


// PIT FALLS of recursion
// Wrong base case
