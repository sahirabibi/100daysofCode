// main outer function that is called and their is an inner function that calls itself within the outer function 


function collectOdds(nums) {
    let res = [];

    function helper(helperInput) {
        if (helperInput.length < 1) return;
        if (helperInput[0] % 2 !== 0) {
            res.push(helperInput[0])
        }
        nums.shift()
        return helper(nums)
    }

    helper(nums)
    return res;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6]))
