function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const findNum = nums.find((a) => a === i + 1);
    if (!findNum) result.push(i + 1);
  }
  return result;
}

findDisappearedNumbers([1, 2, 3, 4]);
