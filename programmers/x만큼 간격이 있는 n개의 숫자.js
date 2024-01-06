function solution(x, n) {
    let answer = [x];
    let num = x;
    while (n > 1) {
        num = num + x
        answer[answer.length] = num;  //인덱스에 직접 할당하는 방법 사용
        n--;
    }
    return answer;
}
