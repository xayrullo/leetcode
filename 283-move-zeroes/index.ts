// export const moveZeroes = function (nums: number[]): number[] {
//   let numbers: number[] = [];
//   let zeroes: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zeroes.push(nums[i]);
//     else numbers.push(nums[i]);
//   }
//   return [...numbers, ...zeroes];
// };
export const moveZeroes = function (nums: number[]): void {
    let changedArr: number[] = [];
    let zeros: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) changedArr.push(nums[i])
        else zeros.push(nums[i])
    }
    changedArr.splice(changedArr.length, 0, ...zeros)
    nums.splice(0, nums.length, ...changedArr)
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
