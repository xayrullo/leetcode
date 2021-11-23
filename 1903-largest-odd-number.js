var largestOddNumber = function (num) {
    var n = -1
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 === 1) {
            n = i
            break
        }
    }
    if (n === -1) return ''
    return num.substring(0, n + 1)
};
var answer = largestOddNumber('45646794131654')
console.log(answer)