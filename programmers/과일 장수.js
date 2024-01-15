function solution(k, m, score) { //앞에서 부터 끊기 descending
    score = score.sort().reverse();
    let ans = 0;
    for (i = 1; i <= score.length; i++) {
        if ((i % m == 0) && (m <= i)) {
            ans = ans + score[i-1] * m;
        }
    }
    return ans;
}
