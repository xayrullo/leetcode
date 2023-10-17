function findDisappearedNumbers(nums) {
    var result = [];
    var _loop_1 = function (i) {
        var findNum = nums.find(function (a) { return a === i + 1; });
        if (!findNum)
            result.push(i + 1);
    };
    for (var i = 0; i < nums.length; i++) {
        _loop_1(i);
    }
    console.log(result);
    return result;
}
findDisappearedNumbers([1, 2, 3, 4]);
