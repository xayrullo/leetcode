export const fibonacci = function(n: number): number {
    let fib: Array<number> = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]
}