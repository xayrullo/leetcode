var plusOne = function(digits) {
    let oddNum = 0;
    let newArray = [];
    oddNum = Math.floor((digits[digits.length - 1] + 1) / 10)
    newArray.unshift((digits[digits.length - 1] + 1) % 10)
    for (let index = digits.length - 2; index >= 0; index--) {
        newArray.unshift((digits[index] + oddNum) % 10)
        oddNum = Math.floor((digits[index] + oddNum) / 10);
    }
    if (oddNum) newArray.unshift(oddNum)
    return newArray
};

console.log(plusOne([8,9,9,9]))