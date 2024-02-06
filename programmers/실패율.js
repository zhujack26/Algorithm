function solution(N, stages) {
    let count_arr = [];
    //1) N+1만큼 빈 배열 생성 ex [0, 0, 0, 0, 0]
    for (let i = 0; i < N+1; i++) {
        count_arr.push(0);
    }
    
    //2) stages를 돌면서 값 만큼 위 빈 배열에 카운팅 이중 for문 필요
    for (let i = 0; i < stages.length; i++) {
        for (let j = 0; j < stages[i]; j++) {
            count_arr[j]++;
        }
    }//count_arr  [8,7,4,2,1,1]
    
    //3) 인접한 인덱스 활용하여 실패율 구하기
    let failure = [];
    for (let i = 0; i < count_arr.length-1; i++) {
        failure.push((count_arr[i] - count_arr[i+1]) / count_arr[i]);
    }//failure  [0.125,0.42857142857142855,0.5,0.5,0]
    
    //4) 원하는 기준으로 정렬
    const obj = {};
    for (let i = 0; i < failure.length; i++) {
        obj[i+1] = failure[i]
    }
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a]).map(Number);
}
