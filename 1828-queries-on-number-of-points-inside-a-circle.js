var countPoints = function(points, queries) {
    var result = []
    for (let query = 0; query < queries.length; query++) {
        var count = 0
        for (let point = 0; point < points.length; point++) {
            var dx = queries[query][0]-points[point][0]
            var dy = queries[query][1]-points[point][1]
            var d = dx*dx + dy*dy
            if (d <= queries[query][2]*queries[query][2]) {
                count ++
            }
        }
        result.push(count)
    }
    return result
};
console.log(countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]));