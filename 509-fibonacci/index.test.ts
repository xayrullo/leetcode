import { fibonacci } from "."

describe('Testing Fibonacci Number', () => {
    it('Test Cases', () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(4)).toBe(3)
        expect(fibonacci(10)).toBe(55)
        expect(fibonacci(20)).toBe(6765)
    })
})