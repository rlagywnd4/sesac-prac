function solution(n, arr1, arr2) {
  var answer = [];
  let binArr = [];
  // 숫자를 2진수로 변경
  for (let i = 0; i < arr1.length; i++) {
    let tmp = arr1[i].toString(2);
    answer[i] = [...tmp];
    // 남는 부분을 채운다.
    while (answer[i].length < n) {
      answer[i].unshift('0');
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let tmp = arr2[i].toString(2);
    binArr[i] = [...tmp];
    // 남는 부분을 채운다.
    while (binArr[i].length < n) {
      binArr[i].unshift('0');
    }
  }
  // 두 숫자를 돌면서 1이면 #으로 값 변경
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binArr[i][j] === '1') {
        answer[i][j] = '1';
      }
      if (answer[i][j] === '1') {
        answer[i][j] = '#';
      } else {
        answer[i][j] = ' ';
      }
    }
    answer[i] = answer[i].join('');
  }

  return answer;
}
