"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = void 0;
const tribonacci = function (n) {
    let trib = [0, 1, 1];
    if (n <= 2)
        return trib[n];
    for (let index = 0; index <= n - 3; index++) {
        trib[index + 3] = trib[index] + trib[index + 1] + trib[index + 2];
    }
    return trib[n];
};
exports.tribonacci = tribonacci;
