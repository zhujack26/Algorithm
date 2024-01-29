/*
function solution(lottos, win_nums) {
    lottos.sort();
    win_nums.sort();
    let i = 0, j = 0;
    let count = 0;
    let possible = 0;
    while (i < 6 && j < 6) {
        if (lottos[i] == 0) {
            possible++;
            i++;
        }
        else if (lottos[i] == win_nums[j]) {
            count++;
            i++; j++;
        }
        else if (lottos[i] > win_nums[j])
            j++;
        else if (lottos[i] < win_nums[j])
            i++;
    }
    let lotto = {0 : 6, 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1}
    return [lotto[count+possible], lotto[count]]; 
}

1) 숫자에 sort()써서 문제가 있었음  .sort((a,b) => a-b); 사용하여 해결.
2) 아래와 같이 수정하여 시간복잡도 성능 향상.
*/

function solution(lottos, win_nums) {
    let count = 0;
    let possible = 0;
    for (let i of lottos) {
        if (i == 0) {
            possible++;
        } 
        else if (win_nums.includes(i)) {
            count++;
        }
    }
    let lotto = {0 : 6, 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1}
    return [lotto[count+possible], lotto[count]]; 
}
