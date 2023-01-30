import { checkIfExist } from "."

describe('Check If N and Its Double Exist', () => {
    it('Test Cases', () => {
        expect(checkIfExist([10,2,5,3])).toBe(true)
        expect(checkIfExist([3,1,7,11])).toBe(false)
    })
})