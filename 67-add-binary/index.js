"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBinary = void 0;
const addBinary = function (a, b) {
    let fastMemory = 0;
    let maxNum = '';
    let minNum = '';
    let result = '';
    if (a.length > b.length) {
        maxNum = a;
        minNum = b;
    }
    else {
        maxNum = b;
        minNum = a;
    }
    let zero = '';
    for (let i = 0; i < maxNum.length - minNum.length; i++) {
        zero = `0${zero}`;
    }
    minNum = zero + minNum;
    for (let ind = maxNum.length - 1; ind >= 0; ind--) {
        if (parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory === 2) {
            result = `0${result}`;
            fastMemory = 1;
        }
        else if (parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory === 3) {
            result = `1${result}`;
            fastMemory = 1;
        }
        else {
            result = `${parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory}${result}`;
            fastMemory = 0;
        }
    }
    if (fastMemory > 0)
        result = '1' + result;
    return result;
};
exports.addBinary = addBinary;
