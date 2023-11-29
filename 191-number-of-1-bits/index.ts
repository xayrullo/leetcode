function hammingWeight(n: number): number {
  return n
    .toString(2)
    .split("")
    .filter((e) => e !== "0").length;
}

console.log(hammingWeight(parseInt("00000000000000000000000000001011", 2)));
