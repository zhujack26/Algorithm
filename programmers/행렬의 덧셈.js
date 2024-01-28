function solution(arr1, arr2) {
    var answer = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array();
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j]);    
        }
    }
    return answer;
}
/*
1) 자바스크립트에서의 2차원 배열 선언
2) map함수의 활용 생각해보기
function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((num, j) => num + arr2[i][j]));
}
*/
