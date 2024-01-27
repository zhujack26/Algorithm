function solution(s) {
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-z]/.test(s[i]) || (s.length != 4 && s.length != 6))
            return false;
    }
    return true;
}
