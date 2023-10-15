function solution(players, callings) {
  //for (let i = 0; i < callings.length; i++){ //루프 한번 돔
  // const n = players.indexOf(callings[i]); // 루프 한번 돔
  // if(n !== -1){
  // let tmp = players[n];
  // players[n] = players[n-1];
  // players[n-1] = tmp;
  // }
  const keyCalling = {};
  callings.forEach((item) => {
    keyCalling[item] = (keyCalling[item] || 0) + 1;
  });

  for (let i = 0; i < players.length; i++) {
    const elementToMove = players.splice(i, 1)[0]; // 해당 인덱스의 요소를 제거하고 반환
    const toIndex = i - keyCalling[players[i]];

    players.splice(toIndex, 0, elementToMove);
  }

  return players;
}
