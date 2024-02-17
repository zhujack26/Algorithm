function solution(numbers) {
    const result = numbers.reduce((a, b) => {
        return a + b
    })
    return result / numbers.length;
}
