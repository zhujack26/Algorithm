function solution(babbling) {
    let result = 0;
    for (let i = 0; i < babbling.length; i++) {
        babbling[i] = babbling[i].replace("aya", "A");
        babbling[i] = babbling[i].replace("ye", "A");
        babbling[i] = babbling[i].replace("woo", "A");
        babbling[i] = babbling[i].replace("ma", "A");
        console.log(babbling[i]);
        if (!/[a-z]/.test(babbling[i]))
            result++;
    }
    return result;
}
/*
정규 표현식(Regular Expression, RegExp)을 사용하여 검색하고, 정규 표현식과 일치하는지 여부를 확인.
일치하면 true, 그렇지 않으면 false를 반환.
/a-z/.test(babbling[i]) : 이 표현식은 문자열 babbling[i]가 "a-z"라는 문자열을 포함하고 있는지를 확인. "a-z"라는 국어를 그대로 찾는 것.
/[a-z]/.test(babbling[i]) : 이 표현식은 문자열 babbling[i]에 알파벳 소문자가 하나라도 포함되어 있는지를 확인. 여기서 [a-z]는 알파벳 소문자 전체를 의미하는 범위.
*/
