function solution(x) {
    let result = 0;
    let temp = x;    
    while (temp > 0) {
        result = result + (temp % 10);
        temp = parseInt(temp / 10);
    }
    return x % result == 0 ? true : false;
}
