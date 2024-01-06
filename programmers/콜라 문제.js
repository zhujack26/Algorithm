function solution(a, b, n) {
    var answer = 0;
    var remaining = 0;
    while (n >= a) {
        if (n % a != 0) {
            remaining = n % a;
            n = Math.floor(n / a) * b;
            answer = answer + n;
            n = n + remaining;
        }
        else if (n % a == 0) {
            n = Math.floor(n / a) * b;
            answer = answer + n;
        }
    }
    return answer;
}
