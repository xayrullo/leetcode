var searchInsert = function (nums, target) {
    let i = 0;
    if (i === 0 && target <= nums[0]) return 0;
    if (i ===0 && target > nums[nums.length - 1]) return nums.length;
    let foundIndex = nums.findIndex(num => num === target)
    if (foundIndex > -1 && i === 0) return foundIndex;
    while (foundIndex === -1) {
        i ++
        foundIndex = nums.findIndex(num => num === target - i)
    }
    return foundIndex + 1
}

console.log(searchInsert([3,6,7,8,10], 5));
