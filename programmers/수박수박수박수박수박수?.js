function solution(n) {
    let answer = "";
    for (i = 0; i < n; i++) {
        if(i % 2 == 0)
            answer = answer.concat('수');
        else if (i % 2 == 1)
            answer = answer.concat('박');
    }
    return answer;
}


/*
JavaScript에서 문자열에 문자 추가
1) concat()
2) +
*/
