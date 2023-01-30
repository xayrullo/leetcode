export const climbStairs = function (n: number): number {
    if (n < 4) return n;
    let fib: Array<number> = [1, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n];
}