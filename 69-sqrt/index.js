"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqrt = void 0;
const mySqrt = function (x) {
    let result = 0;
    result = Math.pow(x, 0.5);
    result = Math.floor(result);
    return result;
};
exports.mySqrt = mySqrt;
