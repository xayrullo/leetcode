var fizzBuzz = function (n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz')
            continue;
        };
        if (i % 3 === 0) {
            answer.push('Fizz')
            continue;
        };
        if (i % 5 === 0) {
            answer.push('Buzz')
            continue;
        };
        answer.push(`${i}`)
    }
    return answer;
};

console.log(fizzBuzz(3));
