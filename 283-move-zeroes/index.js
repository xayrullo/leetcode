"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = void 0;
// export const moveZeroes = function (nums: number[]): number[] {
//   let numbers: number[] = [];
//   let zeroes: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zeroes.push(nums[i]);
//     else numbers.push(nums[i]);
//   }
//   return [...numbers, ...zeroes];
// };
var moveZeroes = function (nums) {
    var count = 0;
    var numbers = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
            count++;
        else
            numbers.push(nums[i]);
    }
    for (var index = 0; index < count; index++) {
        numbers.push(0);
    }
    return numbers;
};
exports.moveZeroes = moveZeroes;
console.log((0, exports.moveZeroes)([0, 1, 0, 3, 12]));
