function solution(board) {
  var answer = 0;
  // 배열을 돌면서 1을 만나면
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        // i,j라고 했을때 각각에 1을 더하거나 뺀 위치가 1이 아니면 2로 변경
        if (i + 1 < board.length && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
          if (j + 1 < board[i].length && board[i + 1][j + 1] !== 1) {
            board[i + 1][j + 1] = 2;
          }
          if (j - 1 >= 0 && board[i + 1][j - 1] !== 1) {
            board[i + 1][j - 1] = 2;
          }
        }
        if (i - 1 >= 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
          if (j + 1 < board[i - 1].length && board[i - 1][j + 1] !== 1) {
            board[i - 1][j + 1] = 2;
          }
          if (j - 1 >= 0 && board[i - 1][j - 1] !== 1) {
            board[i - 1][j - 1] = 2;
          }
        }
        if (j + 1 < board[i].length && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        if (j - 1 >= 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
      }
    }
  }
  // 배열을 모두 돌면서 0을 만나면 answer에 1추가
  console.log(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        answer += 1;
      }
    }
  }
  console.log(answer);
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
solution(board);
