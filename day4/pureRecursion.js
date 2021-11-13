// find Odds 
// use pure recursion to extract odd values in array
function collectOdds(nums) {

    let newArray = [];
    if (nums.length < 1) return [];

    if (nums[0] % 2 !== 0) {
        newArray.push(nums[0])
    }
    return [...newArray, ...collectOdds(nums.slice(1))]

}

console.log(collectOdds([1, 2, 3, 4, 5]))