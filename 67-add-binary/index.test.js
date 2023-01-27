"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Add binary function', () => {
    it('tests', () => {
        expect((0, index_1.addBinary)('11', '1')).toBe('100');
        expect((0, index_1.addBinary)('1010', '1011')).toBe('10101');
        // test('example-1: ', () => {
        // })
        // test('example-2: ', () => {
        // })
    });
});
