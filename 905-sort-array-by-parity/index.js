var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function sortArrayByParity(nums) {
    var evenNums = nums.filter(function (e) { return e % 2 === 0; });
    var oddNums = nums.filter(function (e) { return e % 2 === 1; });
    return __spreadArray(__spreadArray([], evenNums, true), oddNums, true);
}
console.log(sortArrayByParity([3, 1, 2, 4]));
