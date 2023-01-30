"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfExist = void 0;
const checkIfExist = function (arr) {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
            if (index !== j && arr[index] === 2 * arr[j])
                return true;
        }
    }
    return false;
};
exports.checkIfExist = checkIfExist;
