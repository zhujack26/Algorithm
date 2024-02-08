function solution(s) {
    let x = '';
    let count_x = 1, count_y = 0;
    let i = 0, result = 0;
    while (s.length > 0) {
        x = s[0];
        i++;
        s[i] == x ? count_x++ : count_y++;
        if (count_x == count_y) {
            s = s.slice(i+1, s.length);
            result++;
            i = 0;
            count_x = 1; count_y = 0;
        }
        if (i == s.length-1) {
            result++;
            break;
        }
    }
    return result;
}
