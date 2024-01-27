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
// 미완성 15/9개 정답
