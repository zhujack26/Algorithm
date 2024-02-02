function solution(n) {
    //10진수 -> 3진수
    let result = [];
    while (n > 0) {
        result.unshift(n % 3);
        //3진법 구하는게 21 -> 3의1제곱*2 + 3의0제곱 *1 이므로 
        //오름차순 for문을 쓸거기에 굳이 뒤집으려고 뒤에서 붙이지 않고 앞에서부터 붙여줍니다.
        n = parseInt(n / 3);
    }
    let final_result = 0;
    for (let i = 0; i < result.length; i++) {
        let j = i, square = 1;
        while ( j > 0) {
            square *= 3;
            j--;
        }
        final_result += result[i] * square;
    }
    return final_result;
}

/* 진법 구하는 방법이 js에 있었음 
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
*/
