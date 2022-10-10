var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter ++;
        } else {
            if (counter > max) max = counter;
            counter = 0;
        }
    }
    if (counter > max) max = counter;
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))