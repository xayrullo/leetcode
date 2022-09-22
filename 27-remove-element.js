var removeElement = function(nums, val) {
    if (nums.length === 0) return 0
    let foundInd = nums.findIndex(num => num === val)
    if (foundInd > -1) {
        nums.splice(foundInd, 1)
        return removeElement(nums, val)
    }
    return nums.length
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))