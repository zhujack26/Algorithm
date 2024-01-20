function solution(number, limit, power) {
    let result = 1;
    for (i = 2; i <= number; i++) {
        let temp_set = new Set([1]);
        temp_set.add(i);
        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                temp_set.add(j);
                temp_set.add(i / j);
            }
        }
        if (temp_set.size > limit) {
            result = result + power;
        }
        else if (temp_set.size <= limit) {
            result = result + temp_set.size;
        }
    }
    return result;
}
/*
1. JavaScript에서 배열은 let i = [];과 같이 생성할 수 있으나 
세트는 객체가 아닌 다른 데이터 구조이므로 let i = {};과 같이 객체 리터럴 문법으로는 생성할 수 없다.
let i = new Set();

2. 두번째 for문의 최대범위를 i의 제곱근으로 두어 시간 복잡도 줄이기
https://kbw1101.tistory.com/32
*/
