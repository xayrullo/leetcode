export const replaceElements = function(arr: number[]): number[] {
    if (arr.length === 1) return [-1]
    let replacedArr: Array<number> = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        arr.splice(0, 1);
        if (arr.length)
            replacedArr.push(Math.max(...arr))
        else replacedArr.push(-1)
    }
    return replacedArr;
}

console.log(replaceElements([17,18,5,4,6,1]))