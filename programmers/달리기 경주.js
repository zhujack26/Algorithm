/* 시간초과.. 방법 생각 중 -> 해시맵
function solution(players, callings) {
    for(let i of callings) {
        let num = players.indexOf(i);
        [players[num-1], players[num]] = [players[num], players[num-1]];
    }
    return players;
}
*/

//정답 코드
function solution(players, callings) {
    const playerMap = {};
    players.forEach((player, index) => {
        playerMap[player] = index;
    });
    for (let i = 0; i < callings.length; i++) {
        let calling = callings[i];
        let num = playerMap[calling];
        [players[num-1], players[num]] = [players[num], players[num-1]];
        playerMap[players[num-1]] = num - 1;
        playerMap[players[num]] = num;
    }
    return players;
}
