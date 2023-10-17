function thirdMax(nums) {
    var first = Math.max.apply(Math, nums);
    var secondNums = nums.filter(function (a) { return a !== first; });
    var second = Math.max.apply(Math, secondNums);
    var thirdNums = secondNums.filter(function (a) { return a !== second; });
    if (thirdNums.length === 0)
        return first;
    var third = Math.max.apply(Math, thirdNums);
    return third;
}
console.log(thirdMax([3, 2]));
