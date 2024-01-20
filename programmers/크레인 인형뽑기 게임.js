function solution(board, moves) {
    let basket = [];
    let count = 0;
    for (i = 0; i < moves.length; i++) {
        for (j = 0; j < board.length; j++) {
            if (board[j][moves[i]-1] != 0) {
                basket.push(board[j][moves[i]-1]);
                if (basket.length >= 2 && (basket.slice(-2)[0] == basket.slice(-1)[0])) {
                    count += 2;
                    basket = basket.slice(0, -2);
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return count;
}
