"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Checking 69 Sqrt problem', () => {
    it('Test cases', () => {
        expect((0, _1.mySqrt)(4)).toBe(2);
        expect((0, _1.mySqrt)(8)).toBe(2);
        expect((0, _1.mySqrt)(420)).toBe(20);
        expect((0, _1.mySqrt)(2222222222222222)).toBe(47140452);
    });
});
