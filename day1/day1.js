// two sums leetcode


var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (nums.slice(i + 1, nums.length).includes(diff)) {
            return [i, nums.indexOf(diff, i + 1)]
        }
    }
    
};
