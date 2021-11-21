var romanToInt = function (s) {
    if (s.length === '') return
    var r = getInt(s[s.length - 1])
    for (let index = s.length - 2; index >= 0; index--) {
        if (getInt(s[index]) < getInt(s[index + 1])) r -= getInt(s[index])
        else r += getInt(s[index])
    }
    return r
};
var getInt = function (index) {
    switch (index) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

console.log(romanToInt('MCMXCIV'));