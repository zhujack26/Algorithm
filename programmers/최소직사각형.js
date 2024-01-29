function solution(sizes) {
    let min_num = 0;
    let max_num = 0;
    for (let i = 0; i < sizes.length; i++) {
        if(Math.min(...sizes[i]) > min_num) {
            min_num = Math.min(...sizes[i]);
        }
        if(Math.max(...sizes[i]) > max_num) {
            max_num = Math.max(...sizes[i]);
        }
    }
    return min_num * max_num;
}
