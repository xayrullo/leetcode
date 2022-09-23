var runningSum = function(nums) {
    let createdArr = [];
    for (let ind = 0; ind < nums.length; ind++) {
        let sum = nums[ind];
        for (let index = 0; index < ind; index++) {
            sum = sum + nums[index]   
        }
        createdArr.push(sum)
    }
    return createdArr;
}
console.log(runningSum([1,1,1,1,1]))
