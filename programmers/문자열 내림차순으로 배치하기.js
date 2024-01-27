function solution(s) {
    s = s.split('').sort().reverse().join('');
    return s;
}
/* 숫자는  sort((a,b) => a-b)
문자는 위와 같이 */
