var minimumTotal = function(triangle) {
    let sum = 0;
    let index = 0;
    if (triangle.length === 1) return triangle[0][0]
    while (index === (triangle.length*(triangle.length - 1)) / 2 + 1) {
        
        index ++;
    }
    return sum;
}

console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))