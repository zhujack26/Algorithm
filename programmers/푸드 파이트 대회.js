function solution(food) {
    let answer = [];
    for (i = 1; i < food.length; i++) {
        if (food[i] % 2 == 1) {
            for (j = 0; j < (food[i] - 1) / 2; j++) {
                answer.push(i);
            }
        }
        else if (food[i] % 2 == 0) {
            for (j = 0; j < food[i] / 2; j++) {
                answer.push(i);
            }
        }
    }
    answer.push(0); 
    
    for (i = food.length; i > 0; i--) {
        if (food[i] % 2 == 1) {
            for (j = 0; j < (food[i] - 1) / 2; j++) {
                answer.push(i);
            }
        }
        else if (food[i] % 2 == 0) {
            for (j = 0; j < food[i] / 2; j++) {
                answer.push(i);
            }
        }
    }
    return answer.join("");
}
