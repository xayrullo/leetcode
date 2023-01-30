import { tribonacci } from "."

describe('Checking N-th Tribonacci Number', () => {
    it ('Test Cases', () => {
        expect(tribonacci(4)).toBe(4)
        expect(tribonacci(25)).toBe(1389537)
        expect(tribonacci(20)).toBe(66012)
        expect(tribonacci(35)).toBe(615693474)
        expect(tribonacci(30)).toBe(29249425)
    })
})