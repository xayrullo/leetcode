var longestCommonPrefix = function (strs) {
    var minLenIndex = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < strs[minLenIndex].length) minLenIndex = i;
    }

    var prefix = strs[minLenIndex];

    for (let i = 0; i < strs.length; i++) {
        if (i != minLenIndex) prefix = checkSimilar(prefix, strs[i]);
    }

    return prefix;
};
var checkSimilar = function (str1, str2) {
    var mins = "", maxs = "";
    if (str1.length >= str2.length) {
        mins = str2;
        maxs = str1;
    } else {
        mins = str1;
        maxs = str2;
    }
    for (var i = 0; i < mins.length; i++) {
        if (mins[i] != maxs[i]) return mins.substring(0, i);
    }
    return mins;
}
console.log(longestCommonPrefix(["flower","flow","flight"]))