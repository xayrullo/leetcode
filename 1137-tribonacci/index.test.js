"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Checking N-th Tribonacci Number', () => {
    it('Test Cases', () => {
        expect((0, _1.tribonacci)(4)).toBe(4);
        expect((0, _1.tribonacci)(25)).toBe(1389537);
        expect((0, _1.tribonacci)(20)).toBe(66012);
        expect((0, _1.tribonacci)(35)).toBe(615693474);
        expect((0, _1.tribonacci)(30)).toBe(29249425);
    });
});
