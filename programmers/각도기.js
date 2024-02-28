function solution(angle) {
    switch (true) {
        case 0 < angle && angle < 90 :
            return 1;
        case angle == 90 :
            return 2;
        case angle == 180 :
            return 4;
        default :
            return 3;
    }
}
