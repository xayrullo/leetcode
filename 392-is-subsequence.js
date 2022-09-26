var isSubsequence = function(s, t) {
    if (s.length > t.length) return false
    let cycle = 0;
    for (let ind = 0; ind < s.length; ind++) {
        let isFound = false;
        for (let index = cycle; index < t.length; index++) {
            if (s[ind] === t[index]) {
                cycle = index + 1;
                isFound = true
                break;
            }
        }
        if (!isFound) return false;
    }
    return true;
}

console.log(isSubsequence("aaaaaa", "bbaaaa"));
