function realSol(n, lost, reserve) {
  lost.sort((a, b) => a - b);

  lost.forEach((lostPersonIdx, idx) => {
    if (reserve.includes(lostPersonIdx)) {
      const reserveIdx = reserve.indexOf(lostPersonIdx);
      reserve[reserveIdx] = null;
      lost[idx] = null;
    }
  });

  lost.forEach((lostPersonIdx, idx) => {
    if (reserve.includes(lostPersonIdx - 1)) {
      const reserveIdx = reserve.indexOf(lostPersonIdx - 1);
      reserve[reserveIdx] = null;
      lost[idx] = null;
    } else if (reserve.includes(lostPersonIdx + 1)) {
      const reserveIdx = reserve.indexOf(lostPersonIdx + 1);
      reserve[reserveIdx] = null;
      lost[idx] = null;
    }
  });

  const lostPerson = lost.filter((lostPersonIdx) => lostPersonIdx).length;
  const answer = n - lostPerson;

  return answer;
}
/////////////////////////////////////////////////////////////////////////////////

function solution(n, lost, reserve) {
  // n - lost.length를 해서 체육복이 있는 사람수를 구한다.
  n = n - lost.length;
  // lost의 앞뒤를 확인해서 reserve에 있으면 n + 1을 하고 reserve에서 값을 제외시킨다.
  for (let i = 0; i < lost.length; i++) {
    let center = reserve.indexOf(lost[i]);
    if (center !== -1) {
      reserve.splice(center, 1);
      continue;
    }
    let j = reserve.indexOf(lost[i] - 1);
    let k = reserve.indexOf(lost[i] + 1);
    if (j !== -1) {
      console.log('j', j);
      n += 1;
      reserve.splice(j, 1);
    } else if (k !== -1) {
      console.log('k', k);
      n += 1;
      reserve.splice(k, 1);
    }
  }
  // lost를 다 돌면 return을 한다.
  return n;
}

//////////////////////////////////////////////////////

function generateData() {
  const n = Math.floor(Math.random() * 28) + 2; // 2 이상 30 미만의 랜덤한 숫자
  const allNumbers = Array.from({ length: n }, (_, index) => index + 1); // 1부터 n까지의 숫자를 가진 배열

  // 배열 섞기 (중복 가능)
  for (let i = allNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
  }

  // 일부만 선택해서 lost와 reserve 생성
  const lostCount = Math.floor(n / 2);
  const reserveCount = Math.floor(n / 2);
  const lost = allNumbers.slice(0, lostCount);
  const reserve = allNumbers.slice(lostCount, lostCount + reserveCount);

  return { n, lost, reserve };
}

// const { n, lost, reserve } = generateData();
// lost.sort((a, b) => a - b);
// reserve.sort((a, b) => a - b);
// const n1 = n;
// const lost1 = [...lost];
// const reserve1 = [...reserve];
// console.log(`n: ${n}`);
// console.log(`lost: [${lost.join(', ')}]`);
// console.log(`reserve: [${reserve.join(', ')}]`);
// console.log(realSol(n, lost, reserve));
// console.log(solution(n1, lost1, reserve1));

let falseNum = 0;
for (let i = 0; i < 1000; i++) {
  const { n, lost, reserve } = generateData();
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const n1 = n;
  const lost1 = [...lost];
  const reserve1 = [...reserve];
  const n2 = n;
  const lost2 = [...lost];
  const reserve2 = [...reserve];
  if (realSol(n2, lost2, reserve2) === solution(n1, lost1, reserve1)) {
    console.log(true);
  } else {
    console.log(`n: ${n}`);
    console.log(`lost: [${lost.join(', ')}]`);
    console.log(`reserve: [${reserve.join(', ')}]`);
    console.log(false);
    falseNum += 1;
    return;
  }
}
console.log(falseNum);
