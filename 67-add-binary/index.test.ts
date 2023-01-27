import { addBinary } from './index'

describe('Add binary function', () => {
    it ('tests', () => {
        expect(addBinary('11', '1')).toBe('100')
        expect(addBinary('1010', '1011')).toBe('10101')
        // test('example-1: ', () => {
        // })
        // test('example-2: ', () => {
        // })
    })
})