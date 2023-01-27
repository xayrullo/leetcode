var lengthOfLastWord = function(s) {
  let words = s.split(' ');
  let filteredWords = []
  for (let ind = 0; ind < words.length; ind++) {
    if (words[ind].length > 0) {
        filteredWords.push(words[ind])
    }
  }
  return filteredWords[filteredWords.length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '))