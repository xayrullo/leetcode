var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let indCus = 0; indCus < accounts.length; indCus++) {
        let sumWealth = 0;
        for (let indBank = 0; indBank < accounts[indCus].length; indBank++) {
            sumWealth += accounts[indCus][indBank]
        }
        if (maxWealth < sumWealth) maxWealth = sumWealth;
    }
    return maxWealth;
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
