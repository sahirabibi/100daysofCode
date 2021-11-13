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
