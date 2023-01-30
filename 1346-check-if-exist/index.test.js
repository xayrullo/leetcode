"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Check If N and Its Double Exist', () => {
    it('Test Cases', () => {
        expect((0, _1.checkIfExist)([10, 2, 5, 3])).toBe(true);
        expect((0, _1.checkIfExist)([3, 1, 7, 11])).toBe(false);
    });
});
