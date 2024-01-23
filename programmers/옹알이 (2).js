function solution(babbling) {
    let typeMap = {"aya": 'A', "ye": 'B', "woo": 'C', "ma": 'D'};
    for (i = 0; i < babbling.length; i++) {
        for (let key in typeMap) {
            babbling[i] = babbling[i].split(key).join(typeMap[key]); //가능한 건 대문자로
        }
    }
    let count = 0;
    for (i = 0; i < babbling.length; i++) {
        for (j = 0; j < babbling[i].length-1; j++) {
            if ((babbling[i][j] == babbling[i][j+1]) || /[a-z]/.test(babbling[i][j]) || /[a-z]/.test(babbling[i][j+1])) //중복일 경우, 소문자가 남아있을 경우
                break;
            if (j == babbling[i].length-2) //인덱스 끝에 다다르면(앞 조건에 안걸리고 무사하면)
                count++;
        }
        if ((babbling[i].length == 1) && /[A-Z]/.test(babbling[i])) //대문자 혼자일경우(예외 케이스 방지)
            count++;
    }
    return count;
}
