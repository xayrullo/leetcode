"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Valid Mountain Array', () => {
    it('Test Cases: ', () => {
        expect((0, _1.validMountainArray)([2, 1])).toBe(false);
        expect((0, _1.validMountainArray)([3, 5, 5])).toBe(false);
        expect((0, _1.validMountainArray)([0, 3, 2, 1])).toBe(true);
        expect((0, _1.validMountainArray)([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 6, 7, 8, 7, 6, 5])).toBe(false);
        expect((0, _1.validMountainArray)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
    });
});
