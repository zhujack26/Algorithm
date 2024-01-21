//버블 정렬 사용
function solution(strings, n) {
    let temp = "";
    for(i = 0; i < strings.length; i++) {
        for (j = 0; j < strings.length-i-1; j++) {
            if (strings[j][n] > strings[j+1][n]) {  
                temp = strings[j];
                strings[j] = strings[j+1];
                strings[j+1] = temp;
            }
            else if ((strings[j][n] == strings[j+1][n]) && strings[j] > strings[j+1]) {
                temp = strings[j];
                strings[j] = strings[j+1];
                strings[j+1] = temp;
            }
        }
    }
    return strings;
}
