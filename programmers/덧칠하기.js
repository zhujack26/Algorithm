// 1)전부 true로 2)덧칠할 곳을 false로 3)인덱스 접근해서 해결
function solution(n, m, section) {
    let arr = [];
    let result = 0;
    for (i = 0; i < n; i++) {
        arr.push(true);
    }
    for (i = 0; i < section.length; i++) {
        arr[section[i]-1] = false;
    }
    for (i of section) {
        if (arr[i-1] == false) {
            result++;
            for (j = 0; j < m; j++) {
                arr[i-1+j] = true;
                if (i-1+j == arr.length)
                    break;
            }
        }
        
    }
    return result;
}
