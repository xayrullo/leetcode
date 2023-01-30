"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
const fibonacci = function (n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};
exports.fibonacci = fibonacci;
