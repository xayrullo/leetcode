function sortArrayByParity(nums: number[]): number[] {
  const evenNums = nums.filter((e) => e % 2 === 0);
  const oddNums = nums.filter((e) => e % 2 === 1);
  return [...evenNums, ...oddNums];
}
console.log(sortArrayByParity([3,1,2,4]))
