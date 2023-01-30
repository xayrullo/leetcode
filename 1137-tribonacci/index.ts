export const tribonacci = function(n: number): number {
    let trib: Array<number> = [0, 1, 1]
    if (n <= 2) return trib[n];
    for (let index = 0; index <= n - 3; index++) {
        trib[index + 3] = trib[index] + trib[index + 1] + trib[index + 2]
    }
    return trib[n]
}