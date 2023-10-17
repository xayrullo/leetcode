function sortedSquares(nums: number[]): number[] {
  return nums.map((a) => a * a).sort((a, b) => a - b);
}

console.log(sortedSquares([-7, -3, 2, 3, 11]));
