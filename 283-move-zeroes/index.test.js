"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Move Zeroes', () => {
    it('Test Cases', () => {
        expect((0, _1.moveZeroes)([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
        expect((0, _1.moveZeroes)([0])).toEqual([0]);
    });
});
