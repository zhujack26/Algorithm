function solution(n) {
    if (n == 2)
        return 1;
    if (n == 3)
        return 2;
    let count = 2;
    while (n > 3) {
        let prime = true; //소수 판별
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                prime = false;
                break;
            }
        }
        if (prime == true) {
            count++;
        }
        n--;
    }
    return count;
}
/*
<에라토스테네스의 체>
참조 : https://sihyung92.oopy.io/4e7efa0a-984f-4bc9-bab9-d2c0ac4faa35
*/
