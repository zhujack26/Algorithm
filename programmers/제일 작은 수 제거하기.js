function solution(arr) {
    let min_idx = arr.indexOf(Math.min(...arr));
    arr.splice(min_idx, 1);
    if (arr.length == 0)
        arr.push(-1);
    return arr;
}
//테스트 케이스에는 없는데 제일 작은 수가 여러개면 for문으로 검사하며 제거
//splice(배열 삭제) vs slice (배열 추출)
