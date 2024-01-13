function solution(survey, choices) {
    let type = ['R', 'C', 'J', 'A', 'T', 'F', 'M', 'N'];
    let point = [0, 0, 0, 0, 0, 0, 0, 0];
    let answer = [];
    for (i = 0; i < choices.length; i++) {
        if (choices[i] > 4) {
            for (j = 0; j < 8; j++) {
                if (type[j] == survey[i][1]) {
                    point[j] = point[j] + (choices[i] - 4);
                }
            }
        }
        else if (choices[i] < 4) {
            for (j = 0; j < 8; j++) {
                if (type[j] == survey[i][0] && choices[i] == 1) {
                    point[j] = point[j] + 3;
                }
                else if (type[j] == survey[i][0] && choices[i] == 2) {
                    point[j] = point[j] + 2;
                }
                else if (type[j] == survey[i][0] && choices[i] == 3) {
                    point[j] = point[j] + 1;
                }
            }
        }
    }
    for (i = 0; i < 4; i++) {
        if (point[i] >= point[i+4]) {
            answer[i] = type[i];
        }
        else
            answer[i] = type[i+4];
    }
    return answer.join("");
}
