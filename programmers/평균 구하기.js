// 방법 1
function solution(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    var answer = sum / arr.length;
    return answer;
}

// 방법 2
function solution(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum / arr.length;
}