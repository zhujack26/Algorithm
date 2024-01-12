function solution(n) {
    n = n.toString();
    let answer = [];
    for (i = 0; i < n.length; i++) {
        answer[i] = parseInt(n[i]);
    }
    return parseInt(answer.sort((a,b) => b-a).join(''));
}
