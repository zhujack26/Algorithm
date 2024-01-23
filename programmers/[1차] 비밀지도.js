/* 1차 문제풀이
function solution(n, arr1, arr2) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }
    for(i = 0; i < n; i++) {
        let j = 0;
        while (j < n) {
            if (arr1[i] % 2 + arr2[i] % 2 >= 1) {
                arr[i][n-1-j] = '#';
            }
            else if (arr1[i] % 2 + arr2[i] % 2 == 0) {
                arr[i][n-1-j] = ' ';
            }
            arr1[i] = parseInt(arr1[i] / 2);
            arr2[i] = parseInt(arr2[i] / 2);
            j++;
        }
        arr[i] = arr[i].join("")
    }
    return arr;
}
*/

// 최종
function solution(n, arr1, arr2) {
    let arr = [];
    for(i = 0; i < n; i++) {
        arr[i] = "";
        for(j = 0; j < n; j++) {
            if (arr1[i] % 2 + arr2[i] % 2 >= 1) {
                arr[i] = '#' + arr[i];
            }
            else if (arr1[i] % 2 + arr2[i] % 2 == 0) {
                arr[i] = ' ' + arr[i];
            }
            arr1[i] = parseInt(arr1[i] / 2);
            arr2[i] = parseInt(arr2[i] / 2);
        }
    }
    return arr;
}
