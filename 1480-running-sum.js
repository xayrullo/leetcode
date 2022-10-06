var runningSum = function(nums) {
    let createdArr = [];
    for (let ind = 0; ind < nums.length; ind++) {
        if (ind === 0) createdArr.push(nums[ind])
        else {
            console.log(createdArr[ind-1], nums[ind])
            createdArr.push(createdArr[ind-1] + nums[ind])
        }
        // let sum = nums[ind];

        // for (let index = 0; index < ind; index++) {
        //     sum = sum + nums[index]   
        // }
        // createdArr.push(sum)
    }
    return createdArr;
}
console.log(runningSum([1,1,1,1,1]))
