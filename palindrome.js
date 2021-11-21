var isPalindrome = function (x) {
    var pal = x.toString()
    for (let first = 0, last = pal.length - 1; first < pal.length, last >= 0; first++, last--) {
        if (pal[first] !== pal[last]) return false
    }
    return true
};
console.log(isPalindrome(124324231));