var removeDuplicates = function (nums) {
    if (nums.length === 0) return
    var outPut = 1, firstEl = nums[0], step = 1
    while (step < nums.length) {
        if (nums[step] !== firstEl) {
            nums[outPut] = nums[step]
            outPut ++
        }
        firstEl = nums[step]
        step ++
    }
    return outPut
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
