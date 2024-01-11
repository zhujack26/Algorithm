//건너뛰는 경우(케이스 25번)를 놓쳐서 고전함

function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let number1 = 0;
    let number2 = 0;
    for (i = 0; i < goal.length; i++) {
        for (j = 0; j < cards1.length; j++) {
            if ((goal[i] == cards1[j] && number1 == j) || (goal[i] == cards1[j] && number1+1 == j)) {
                number1 = j;
                break;
            }
            else if ((goal[i] == cards1[j] && number1 > j) || (goal[i] == cards1[j] && j-number1 > 1)) {
                answer = "No";
                return answer;
            }
        }
        for (k = 0; k < cards2.length; k++) {
            if ((goal[i] == cards2[k] && number2 == k) || (goal[i] == cards2[k] && number2+1 == k)) {
                number2 = k;
                break;
            }
            else if ((goal[i] == cards2[k] && number2 > k) || (goal[i] == cards2[k] && k-number2 > 1)) {
                answer = "No";
                return answer;
            }
        }
    }
    return answer;
}
