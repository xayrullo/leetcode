var singleNumber = function(nums) {
    if (nums.length  === 1) return nums[0]
    for (let ind = 0; ind < nums.length; ind++) {
        let count = 0;
        for (let index = 0; index < nums.length; index++) {
            if (nums[ind] === nums[index]) count++;
        }
        if (count === 1) return nums[ind]
    }
};

console.log(singleNumber([2,2,1]))