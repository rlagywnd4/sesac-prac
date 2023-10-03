function solution(l, r) {
  var answer = [];
  // comp를 증가시키면서
  // 재귀를 돌면서 com을 나눈 나머지가 5또는 0인지 확인
  // 나머지가 5또는 0이고 몫이 10이상이면 재귀에 넣고 아니면 탈출
  // 나머지가 5또는 0이고 몫이 10미만이면 answer에 push
  // 나머지가 5또는 0이 아니면 그냥 탈출
  let checkExist = false;
  for (let comp = l; comp <= r; comp++) {
    if (recursion(comp)) {
      answer.push(comp);
      checkExist = true;
    }
  }

  if (!checkExist) {
    answer.push(-1);
  }
  return answer;
}

function recursion(comp) {
  const checkNum = comp % 10;
  const checkDigit = Math.floor(comp / 10);
  if (checkNum === 5 || checkNum === 0) {
    if (checkDigit >= 10) {
      return recursion(checkDigit);
    } else if (checkDigit === 5 || checkDigit === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeNewlr() {
  const l = getRandomInteger(1, 1000000);
  const r = getRandomInteger(l, 1000000);
  return { l, r };
}
for (let i = 0; i < 5; i++) {
  const { l, r } = makeNewlr();
  console.log('l:', l);
  console.log('r:', r);
  console.log('solution>>>', solution(l, r));
}
