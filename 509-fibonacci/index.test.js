"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Testing Fibonacci Number', () => {
    it('Test Cases', () => {
        expect((0, _1.fibonacci)(2)).toBe(1);
        expect((0, _1.fibonacci)(3)).toBe(2);
        expect((0, _1.fibonacci)(4)).toBe(3);
        expect((0, _1.fibonacci)(10)).toBe(55);
        expect((0, _1.fibonacci)(20)).toBe(6765);
    });
});
