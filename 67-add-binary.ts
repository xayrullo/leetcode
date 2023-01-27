function addBinary(a: string, b: string): string {
    let fastMemory: number = 0;
    let maxNum: string = '';
    let minNum: string = '';
    let result: string = '';

    if (a.length > b.length) {
        maxNum = a;
        minNum = b;
    } else {
        maxNum = b;
        minNum = a;
    }
    let zero: string = ''
    for (let i = 0; i < maxNum.length - minNum.length; i++) {
        zero = `0${zero}`
    }
    minNum = zero + minNum;
    for (let ind = maxNum.length - 1; ind >= 0; ind--) {
        if (parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory === 2) {
            result = `0${result}`;
            fastMemory = 1;
        } else if (parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory === 3) {
            result = `1${result}`;
            fastMemory = 1;
        } else {
            result = `${parseInt(maxNum[ind]) + parseInt(minNum[ind]) + fastMemory}${result}`;
            fastMemory = 0;
        }
    }
    if (fastMemory > 0) result = '1' + result
    return result;
}

console.log(addBinary('11111111111111111111111', '10000000000000000011'))

module.exports = { addBinary }