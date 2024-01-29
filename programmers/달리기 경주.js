//저도 시간초과.. 방법 생각 중 -> 해시맵
function solution(players, callings) {
    for(let i of callings) {
        let num = players.indexOf(i);
        /*
        players[num] = players[num-1];
        players[num-1] = i;
        */
        [players[num-1], players[num]] = [players[num], players[num-1]];
    }
    return players;
}
