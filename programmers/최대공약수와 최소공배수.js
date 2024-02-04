function solution(n, m) {
    let i = 1;
    let max_result = 1; //최대공약수
    let min_result = 1; //최소공배수
    
    while (i <= n || i <= m) {
        if ((n % i == 0) && (m % i == 0))
            max_result = i; 
        i++;
    }
    i = 2;
    
    //최소공배수 구하는 법 (공통 소인수로 몫이 서로소가 될 때까지 나오고 모두 곱하기)
    while (i <= n || i <= m) {
        if (( n % i == 0) && (m % i == 0)) {
            n = n / i;
            m = m / i;
            min_result = min_result * i
        }
        else if((n % i != 0) || (m % i != 0))
            i++;
    }
    min_result = min_result * n * m;
    return [max_result, min_result];
}
