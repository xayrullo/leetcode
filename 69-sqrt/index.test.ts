import { mySqrt } from ".";

describe('Checking 69 Sqrt problem', () => {
    it('Test cases', () => {
        expect(mySqrt(4)).toBe(2)
        expect(mySqrt(8)).toBe(2)
        expect(mySqrt(420)).toBe(20)
        expect(mySqrt(2222222222222222)).toBe(47140452)
    })
})