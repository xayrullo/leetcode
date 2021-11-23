var isValid = function (s) {
    if (s.length % 2 === 1) return false
    if (s.length[0] === ')') return false
    if (s.length[0] === '}') return false
    if (s.length[0] === ']') return false
    var closedBracks = []
    if (s[0] === '(') closedBracks.push(')')
    else if (s[0] === '{') closedBracks.push('}')
    else if (s[0] === '[') closedBracks.push(']')
    for (let i = 1; i < s.length; i++) {
        if (closedBracks.length > 0 && s[i] === closedBracks[closedBracks.length - 1]) {
            closedBracks.splice(closedBracks.length - 1, 1)
        } 
        else if (s[i] === ')') return false
        else if (s[i] === '}') return false
        else if (s[i] === ']') return false
        else {
            if (s[i] === '(') closedBracks.push(')')
            else if (s[i] === '{') closedBracks.push('}')
            else if (s[i] === '[') closedBracks.push(']')
        }
    }
    return closedBracks.length === 0 ? true : false
};
console.log(isValid('([}}()))])'));