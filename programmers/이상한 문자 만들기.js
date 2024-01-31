function solution(s) {
    s = s.split("");
    let result = "";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] != " " && count % 2 == 0) {
            result += s[i].toUpperCase();
            count++;
        }
        else if (s[i] != " " && count % 2 == 1) {
            result += s[i].toLowerCase();
            count++;
        }
        else if (s[i] == " ") {
            result += s[i]
            count = 0;
        }
    }
    return result;
}
//js의 불변(Immutability) https://sustainable-dev.tistory.com/156
//문자열이 한 번 생성되면 해당 문자열의 각 문자는 수정되거나 교체될 수 없다.
