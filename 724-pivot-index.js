var pivotIndex = function(nums) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let left = 0; left < nums.length; left++) {
        let sum2 = 0;
        for (let right = nums.length - 1; right > left; right--) {
            sum2 = sum2 + nums[right]
        }
        if (sumLeft === sum2) return left
        sumRight = sum2;
        sumLeft = sumLeft + nums[left];
    }
    return -1;
};

console.log(pivotIndex([-1,-1,-1,1,1,1]))
