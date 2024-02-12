//숫자10을 고려못해서, 고려해서 처음부터 다시 짤 예정
function solution(dartResult) {
    let answer = 0;
    let answer_part = 1;
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] == '1' && dartResult[i+1] == '0')
            i++
        if (dartResult[i+1] == 'S')
            answer_part = answer_part * dartResult[i] * 1;
        else if (dartResult[i+1] == 'D')
            answer_part = answer_part * dartResult[i] * dartResult[i]
        else if (dartResult[i+1] == 'T')
            answer_part = answer_part * dartResult[i] * dartResult[i] * dartResult[i];
        if (dartResult[i+2] == null) {
            answer += answer_part;
            break;
        }
        if (/[0-9]/.test(dartResult[i+2])) {
            if (!/[0-9]/.test(dartResult[i+4]) && dartResult[i+4] == '*')
                answer_part = answer_part * 2;
            i++;
            answer += answer_part;
            answer_part = 1;
        }
        
        else if (!/[0-9]/.test(dartResult[i+2]) && dartResult[i+2] == '*') {
            answer_part = answer_part * 2;
            if (!/[0-9]/.test(dartResult[i+5]) && dartResult[i+5] == '*')
                answer_part = answer_part * 2;
            i = i+2;
            answer += answer_part;
            answer_part = 1;
        }
        else if (!/[0-9]/.test(dartResult[i+2]) && dartResult[i+2] == '#') {
            answer_part = answer_part * (-1);
            if (!/[0-9]/.test(dartResult[i+5]) && dartResult[i+5] == '*')
                answer_part = answer_part * 2;
            i = i+2;
            answer += answer_part;
            answer_part = 1;
        }
    }
    return answer;
}
