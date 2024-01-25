function solution(X, Y) {
    let answer = [];
    for (i = 0; i < X.length; i++) {
        for (j = 0; j < Y.length; j++) {
            if (X[i] == Y[j]) {
                answer.push(X[i]);
                Y = Y.replace(X[i], '');
                break;
            }
        }
    }
    if (answer.length == 0)
        return ("-1");
    answer.sort((a, b) => b - a);
    if (answer[0] == 0)
        return ("0");
    return answer.join("");
}
/* 테케 11~15 시간 초과
해시맵 혹은 다른 방법 강구
*/
