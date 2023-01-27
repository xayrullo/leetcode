export const mySqrt = function(x: number) {
    let result: number = 0;
    result = Math.pow(x, 0.5)
    result = Math.floor(result)
    return result;
}