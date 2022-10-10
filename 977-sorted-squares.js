var sortedSquares = function(nums) {
    let sortedNums = [];
    for (let i = 0; i < nums.length; i++) {
        sortedNums.push(nums[i] * nums[i])
    }
    sortedNums.sort((a, b) => a - b)
    return sortedNums;
};

console.log(sortedSquares([-1,-4,0,3,10]));
