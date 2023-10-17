function sortedSquares(nums) {
    return nums.map(function (a) { return a * a; }).sort(function (a, b) { return a - b; });
}
console.log(sortedSquares([-7, -3, 2, 3, 11]));
