function solution(left, right) {
    let result = 0;
    for (i = 0; i <= right - left; i++) {
        let temp = new Set([1]);
        for (j = 1; j <= Math.sqrt(left + i); j++) {
            if ((left + i) % j == 0) {
                temp.add(j);
                temp.add((left + i) / j);
            }
        }
        temp.size % 2 == 0 ? result += (left + i) : result -= (left + i);
    }
    return result;
}
