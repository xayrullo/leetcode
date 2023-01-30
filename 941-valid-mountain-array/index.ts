export const validMountainArray = function(arr: number[]): boolean {
    if (arr.length <= 2) return false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false
        let max: number = Math.max(...arr);
        let maxInd: number = arr.findIndex(e => e === max)
        if (maxInd === arr.length - 1 || maxInd === 0) return false
        for (let index = maxInd; index >= 1; index--) {
            if (arr[index] < arr[index - 1]) return false
        }
        for (let index = maxInd; index < arr.length - 1; index++) {
            if (arr[index] < arr[index + 1]) return false
        }
    }
    return true
}
