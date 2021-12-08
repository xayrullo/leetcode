var numJewelsInStones = function (jewels, stones) {
    var index = [123]
    var count = 0
    for (let jewel = 0; jewel < jewels.length; jewel++) {
        index[jewels[jewel]] = true
    }
    for (let stone = 0; stone < stones.length; stone++) {
        if (index[stones[stone]] === true) {
            count++
        }
    }
    // for (let jewel = 0; jewel < jewels.length; jewel++) {
    //     for (let stone = 0; stone < stones.length; stone++) {
    //         if (jewels[jewel] === stones[stone]) {
    //             count ++
    //         }
    //     }
    // }
    return count
};
console.log(numJewelsInStones('aA', 'aAAbbbb'));