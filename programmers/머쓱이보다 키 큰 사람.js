function solution(array, height) {
    const result = array.reduce((acc, cur) => {
        if (cur > height)
            acc.push(cur);
        return acc;
    }, []);
    return result.length;
}
