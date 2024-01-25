function solution(n, lost, reserve) {
    let student = [];
    for (i = 1; i <= n; i++) {
        student[i] = 1;
    }
    student[0] = 0;
    student[n+1] = 0;
    for (i = 0; i < lost.length; i++) {
        student[lost[i]] -= 1;
    }
    for (i = 0; i < reserve.length; i++) {
        student[reserve[i]] += 1;
    }
    for (i = 1; i <= n; i++) {
        if (student[i] == 0 && student[i-1] > 1) {
            student[i-1] -= 1;
            student[i] +=1
        }
        else if (student[i] == 0 && student[i+1] > 1) {
            student[i+1] -= 1;
            student[i] +=1
        }
    }
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (student[i] >= 1)
            count++;
    }
    return count;
}
