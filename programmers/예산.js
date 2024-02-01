function solution(d, budget) {
    d.sort((a, b) => a - b);
    let temp = 0;
    let result = 0;
    for (i = 0; i < d.length; i++) {
        temp += d[i];
        if (budget < temp)
            break;
        result++;
        if (budget == temp)
            break;
    }
    return result;
}
