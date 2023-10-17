var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function heightChecker(heights) {
    var count = 0;
    var expected = __spreadArray([], heights, true).sort(function (a, b) { return a - b; });
    for (var index = 0; index < heights.length; index++) {
        if (expected[index] !== heights[index])
            count++;
    }
    console.log(count);
    return count;
}
heightChecker([1, 2, 3, 4, 5]);
