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


// 각 포문에 3000000개씩 들어가므로 시간초과 -> while문 하나로 수정

function solution(X, Y) {
    X = X.split('').sort().reverse();
    Y = Y.split('').sort().reverse();
    let i = 0, j = 0;
    let answer = "";
    while (i < X.length && j < Y.length) {
        if (X[i] == Y[j]) {
            answer += (X[i]); 
            i++; j++;
        }
        else if (X[i] > Y[j])
            i++;
        else if (X[i] < Y[j])
            j++;
    }
    return answer.length == 0 ? "-1" : (answer[0] == 0 ? "0" : answer);
}
