function hammingWeight(n) {
    return n
        .toString(2)
        .split("")
        .filter(function (e) { return e !== "0"; }).length;
}
console.log(hammingWeight(parseInt("00000000000000000000000000001011", 2)));
