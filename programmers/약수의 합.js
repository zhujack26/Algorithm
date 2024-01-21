function solution(n) {
    let temp = new Set();
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            temp.add(i);
            temp.add(n / i);
        }
    }
    let answer = 0;
    temp.forEach(function(value) {
        answer += value;
    });
    return answer;
}
