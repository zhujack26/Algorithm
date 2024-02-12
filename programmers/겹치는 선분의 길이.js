function solution(lines) {
    let arr = [];
    for (let i = 0; i < 202; i++)
        arr[i] = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++)
            arr[j+100] += 1;
    }
    return arr.filter(item => item >= 2).length;
}
