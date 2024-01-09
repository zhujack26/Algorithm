function solution(n) {
    let n_return = n.toString();
    let answer = [];
    for (i = 0; i < n_return.length; i++) {
        answer[i] = parseInt(n_return[n_return.length -1 - i]);
    }
    return answer;
}
