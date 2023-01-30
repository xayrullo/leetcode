"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceElements = void 0;
const replaceElements = function (arr) {
    if (arr.length === 1)
        return [-1];
    let replacedArr = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        arr.splice(0, 1);
        if (arr.length)
            replacedArr.push(Math.max(...arr));
        else
            replacedArr.push(-1);
    }
    return replacedArr;
};
exports.replaceElements = replaceElements;
console.log((0, exports.replaceElements)([17, 18, 5, 4, 6, 1]));
