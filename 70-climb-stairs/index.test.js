"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Checking calculator climbing stairs function', () => {
    it('Test Cases: ', () => {
        expect((0, _1.climbStairs)(2)).toBe(2);
        expect((0, _1.climbStairs)(3)).toBe(3);
        expect((0, _1.climbStairs)(22)).toBe(28657);
        expect((0, _1.climbStairs)(15)).toBe(987);
        expect((0, _1.climbStairs)(34)).toBe(9227465);
    });
});
