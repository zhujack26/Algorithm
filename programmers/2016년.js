function solution(a, b) {
    let count = 0;
    if (a == 1) { //1월
        count = b;
    }
    else if(a == 2) { //2월
        count = 31 + b;
    }
    else if (a < 8 && (a % 2 == 1)) { //3,5,7월이면
        count = 31 * (Math.floor(a / 2)) + b + 29 + (30 * ((a-3) /2));
    }
    else if (a < 8 && (a % 2 == 0)) { // 4, 6월
        count = 31 * (a / 2) + 30 * Math.floor((a-3) / 2) + b + 29;
    }
    else if(a >= 8 && (a % 2 == 0)) { // 8, 10, 12월
        count = 31 * (a / 2) + 30 * Math.floor((a-3) / 2) + b + 29;
    }
    else if(a >= 8 && (a % 2 == 1)) {//9,11
        count = 31 * ((a+1) / 2) + 30 * ((a-5) / 2) + 29 + b;
    }
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    result = day[(count+4) % 7];
    return result
}
