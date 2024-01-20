function solution(number, limit, power) {
    let result = 1;
    for (i = 2; i <= number; i++) {
        let temp_set = new Set([1]);
        temp_set.add(i);
        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                temp_set.add(j);
                temp_set.add(i / j);
            }
        }
        if (temp_set.size > limit) {
            result = result + power;
        }
        else if (temp_set.size <= limit) {
            result = result + temp_set.size;
        }
    }
    return result;
}
