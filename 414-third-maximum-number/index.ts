function thirdMax(nums: number[]): number {
  let first = Math.max(...nums);
  const secondNums = nums.filter((a) => a !== first);
  let second = Math.max(...secondNums);
  const thirdNums = secondNums.filter((a) => a !== second);
  if (thirdNums.length === 0) return first;
  let third = Math.max(...thirdNums);
  return third;
}
console.log(thirdMax([3, 2]));
