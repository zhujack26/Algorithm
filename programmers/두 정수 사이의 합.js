function solution(a, b) {
    let count = a;
    while (a > b) {
        a--;
        count = count + a;
    }
    while (a < b) {
        a++;
        count = count + a;
    }
    return count;
}
