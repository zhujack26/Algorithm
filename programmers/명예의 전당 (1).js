function solution(k, score) {
    let score_descending = [];
    let answer = [];
    for (i = 0; i < score.length; i++) {
        if (i < k) {
            score_descending[i] = score[i];
            score_descending.sort((a, b) => b - a);
            answer[i] = score_descending[i];
        }
        else {
            score_descending[i] = score[i];
            score_descending.sort((a, b) => b - a);
            answer[i] = score_descending[k-1];
        }
        
    }  
    return answer;
}
