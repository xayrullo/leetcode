var addTwoNumbers = function (l1, l2) {
    var number1 = arrayToNum(l1)
    var number2 = arrayToNum(l2)
    return reversedNumberToArray(number1 + number2)
};

var arrayToNum = function (l1) {
    var numStr = ''
    for (let index = l1.length - 1; index >= 0; index--) {
        numStr = numStr + l1[index]
    }
    return parseInt(numStr)
}

var reversedNumberToArray = function (num) {
    let numArray = []
    let numCopy = num
    for (let index = 0; index < num.toString().length; index++) {
        numArray.push(numCopy % 10)
        numCopy = Math.trunc(numCopy / 10)
    }
    return numArray;
}
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))