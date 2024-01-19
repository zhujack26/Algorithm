function solution(numbers) {
    var answer = [];
    for (i = 0; i < numbers.length; i++) {
        for (j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j]);
        }
    }
    let set = new Set(answer);
    answer = [...set].sort((a,b) => a-b);
    return answer;
}
