function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let one = 0, two = 0, three = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == first[i % 5]) {
            one++;
        }
        if (answers[i] == second[i % 8]) {
            two++;
        }
        if (answers[i] == third[i % 10]) {
            three++;    
        }
    }
    let numbers = [];
    let answer = [];
    numbers.push(one, two, three);
    maxInNumber = Math.max(...numbers);
    for (let j = 0; j <= 2; j++) {
        if (numbers[j] == maxInNumber) {
            answer.push(j+1);
        }
    }
    return answer;
}
