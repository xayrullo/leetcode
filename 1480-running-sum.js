var runningSum = function(nums) {
    let createdArr = [];
    for (let ind = 0; ind < nums.length; ind++) {
        if (ind === 0) createdArr.push(nums[ind])
        else {
            createdArr.push(createdArr[ind-1] + nums[ind])
        }
    }
    return createdArr;
}
console.log(runningSum([1,1,1,1,1]))
