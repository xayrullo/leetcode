function heightChecker(heights: number[]): number {
  let count = 0;
  const expected = [...heights].sort((a, b) => a - b);
  for (let index = 0; index < heights.length; index++) {
    if (expected[index] !== heights[index]) count++;
  }
  return count;
}

heightChecker([1, 2, 3, 4, 5]);
