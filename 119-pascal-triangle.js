var getRow = function (rowIndex) {
    let numRows = rowIndex + 1;
    if (numRows === 1) return [[1]]

    let results = [[1]]
    for (let i = 1; i < numRows; i++) {
        let oldRowElements = results[i - 1]
        let rowElements = []
        for (let row = 0; row <= i; row++) {
            rowElements.push(oldRowElements[row - 1] + oldRowElements[row] || 1)
        }
        results.push(rowElements)
    }
    return results[rowIndex];
}
console.log(getRow(3))