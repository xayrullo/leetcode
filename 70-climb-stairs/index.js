"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.climbStairs = void 0;
const climbStairs = function (n) {
    if (n < 4)
        return n;
    let fib = [1, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};
exports.climbStairs = climbStairs;
