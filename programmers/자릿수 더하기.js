function solution(n) {
    var answer = 0;
    while (n > 0) {
        answer += n % 10;   
        n = ~~(n / 10);
        /* 소수 부분 버리고 정수 부분 남기는 다른 방법
        (n / 10) | 0;
        Math.floor(n / 10);
        Math.ceil(n / 10);*/
    }
    return answer;
}