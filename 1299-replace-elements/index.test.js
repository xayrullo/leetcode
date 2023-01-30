"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Replace Elements with Greatest Element on Right Side', () => {
    it('Test Cases: ', () => {
        expect((0, _1.replaceElements)([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
        expect((0, _1.replaceElements)([400])).toEqual([-1]);
    });
});
