import { moveZeroes } from "."

describe('Move Zeroes', () => {
    it ('Test Cases', () => {
        expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
        expect(moveZeroes([0])).toEqual([0]);
    })
})