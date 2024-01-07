function solution(name, yearning, photo) {
    var answer = [];
    for (let i = 0; i < photo.length; i++) {
        answer[i] = 0;
        for (let j = 0; j < photo[i].length; j++) {
            for (let k = 0; k < name.length; k++) {
                if (photo[i][j] == name[k]) {
                    answer[i] = answer[i] + yearning[k];
                    break;
                }
            }
        }
    }
    return answer;
}
