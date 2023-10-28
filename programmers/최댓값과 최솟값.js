//방법1
function solution(s) {
    var arr = s.split(' ');
    arr = arr.map(function(item) {
        return parseInt(item, 10);
    });
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var answer = min.toString() + ' ' + max.toString();
    return answer;
}

//방법2
function solution(s) {
    const numbers = s.split(' ').map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return `${min} ${max}`;
}