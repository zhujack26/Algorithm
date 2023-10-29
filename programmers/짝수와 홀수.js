//방법 1

function solution(num) {    
    var answer = "Even";
    if (num % 2 != 0)
        answer = "Odd";
    return answer;
}

//방법 2
function solution(num) {
    const answer = num % 2 === 0 ? 'Even' : 'Odd'
    return answer
}

/*복기
1. var 재할당 가능(ES5), const 재할당 불가, let 재할당 가능(블록 스코프 가짐, ES6 이후)
2. =, ==(동등 비교 연산자, 타입 변환하여 비교), ===(일치 비교 연산자, 타입까지 완전 일치 비교)
3. JavaScript에서 문자열을 표현할 때, 작은따옴표('')나 큰따옴표("")를 모두 사용 가능
4. 삼항 조건 연산자에서 사용되는 특별 기호 '?'(만약에), ':'(대체 값 지정)
*/