export const checkIfExist = function(arr: number[]): boolean {
    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
            if (index !== j && arr[index] === 2 * arr[j]) return true
        }
    }
    return false;
}