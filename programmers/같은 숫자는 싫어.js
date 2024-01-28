/* 
function solution(arr) {
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] == arr[i-1])
            arr.splice(i,1)
    }
    return arr;
}

1) 배열의 마지막 인덱스에서 시작하는 방식으로 일부 원소 건너뛰는 문제 방지 가능
2) replace함수는 문자열에만 적용 가능
3) 시간 초과 문제로 아래와 같이 수정
*/
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (answer[answer.length-1] != arr[i])
            answer.push(arr[i]);
    }
    return answer;
}
