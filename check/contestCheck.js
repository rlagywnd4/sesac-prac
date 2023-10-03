function solution(rank, attendance) {
  var answer = 0;
  let a, b, c;
  // 일단 새로운 배열에 false면 추가 안하고 true면 추가
  let arr = [];
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
      arr.push(rank[i]);
    }
  }
  // 랭크 순서대로 정렬
  arr.sort((a, b) => a - b); //sort에서 (a, b) => a - b 이거를 넣어주는 이유는 숫자를 비교해서 오름차순으로 넣기 위함, 안넣으면 string으로 비교해서 10 < 2이렇게 됨
  // 앞에서 3개가 몇번째 rank배열과 같은지 채크후 i 리턴
  for (let i = 0; i < rank.length; i++) {
    if (arr[0] === rank[i]) {
      a = i;
    } else if (arr[1] === rank[i]) {
      b = i;
    } else if (arr[2] === rank[i]) {
      c = i;
    }
  }
  answer = 10000 * a + 100 * b + c;
  return { answer, arr, a, b, c };
}

/////////////////////////////////////////////////////////////////////////////////////////

function generateRankAndAttendance() {
  const length = getRandomNumber(3, 100);
  const howManyTrue = getRandomNumber(3, length);

  // rank 배열 생성
  const rank = Array.from({ length }, (_, index) => index + 1);
  shuffleArray(rank);

  // attendance 배열 생성
  const attendance = Array.from({ length }, (_, index) => index < howManyTrue);
  shuffleArray(attendance);

  return { rank, attendance };
}

// 배열을 섞는 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 주어진 범위 내에서 무작위로 숫자를 생성하는 함수
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
  const { rank, attendance } = generateRankAndAttendance();
  console.log('Rank:', rank);
  console.log('Attendance:', attendance);
  const { answer, arr, a, b, c } = solution(rank, attendance);
  console.log('arr:', arr);
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('answer:', answer);
}
