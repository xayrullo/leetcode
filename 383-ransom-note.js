var canConstruct = function (ransomNote, magazine) {
    let copyRansomNote = ransomNote;
    for (let i = 0; i < ransomNote.length; i++) {
        let foundInd = magazine.indexOf(ransomNote[i])
        if (foundInd >= 0) {
            magazine = magazine.slice(0,foundInd) + magazine.slice(foundInd+1);
            copyRansomNote = copyRansomNote.substring(1, copyRansomNote.length)
        }
    }
    return copyRansomNote.length === 0 ? true : false;

    // for (let i = 0; i < ransomNote.length; i++) {
    //     if (!magazine.includes(ransomNote[i])) return false
    //     magazine = magazine.replace(ransomNote[i], "")
    // }
    // return true
};

console.log(canConstruct('aab', 'baa'));
