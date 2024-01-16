function solution(absolutes, signs) {
    let count = 0;
    for (i = 0; i < absolutes.length; i++) {
        if (signs[i] == false) {
            absolutes[i] = absolutes[i] * (-1);
            count = count + absolutes[i];
        }
        else if (signs[i] == true) {
            count = count + absolutes[i];
        }
    }
    return count;
}
