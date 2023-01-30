import { climbStairs } from '.';

describe('Checking calculator climbing stairs function', () => {
    it('Test Cases: ', () => {
        expect(climbStairs(2)).toBe(2);
        expect(climbStairs(3)).toBe(3);
        expect(climbStairs(22)).toBe(28657);
        expect(climbStairs(15)).toBe(987);
        expect(climbStairs(34)).toBe(9227465);
    })
})