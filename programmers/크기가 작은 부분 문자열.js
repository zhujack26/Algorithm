function solution(t, p) {
    let num = "";
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        num = t.charAt(i);
        for (let j = 1; j < p.length; j++)
            num += t.charAt(i+j);
        if (parseInt(num) <= parseInt(p))
            result++;
    }
    return result;
}
