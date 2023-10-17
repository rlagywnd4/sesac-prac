function realSol(food) {
  let process = true;
  let count = 0;
  let index = 0;

  while (process) {
    if (
      food[index] === 1 &&
      food[index + 1] === 2 &&
      food[index + 2] === 3 &&
      food[index + 3] === 1
    ) {
      food.splice(index, 4);
      count++;
      // console.log('case1')
      if (index !== 0) {
        index = index - 3;
        // console.log('case2')
      }
    } else if (index > food.length - 3) {
      // console.log('case3')
      process = false;
    } else {
      // console.log('case4')
      // console.log(index)
      // console.log(food.length-3)
      index++;
    }
  }
  return count; // console.log(count)
}

///////////////////////////////////////////////////////////////
function solution(ingredient) {
  var answer = 0;
  let oneIndex = 0;
  let order = [1, 2, 3, 1];
  // 루프를 돌다가
  // i번째에서
  for (let i = oneIndex; i < ingredient.length; i++) {
    // 1,2,3,1배열이면 ingredient에서 제외하고 answer에 + 1
    if (ingredient.slice(i, i + 4).toString() === order.toString()) {
      answer += 1;
      ingredient.splice(i, 4);
      i = oneIndex - 1;
      // 아니면 i가 1이면 인덱스 저장
    } else if (ingredient[i] === 1) {
      oneIndex = i;
    }
  }
  // 루프가 끝나면 answer 리턴
  return answer;
}

// 무작위 배열 생성
function newIngre() {
  const length = Math.floor(Math.random() * 1000000) + 1; // 1 이상 1000000 미만의 랜덤한 길이
  console.log(length);
  const myArray = Array.from(
    { length },
    () => Math.floor(Math.random() * 3) + 1
  );
  return myArray;
}

//10번 시도
for (let i = 0; i < 10; i++) {
  let arr1 = newIngre();
  let arr2 = [...arr1];
  let a = realSol(arr1);
  let b = solution(arr2);
  if (a.toString() === b.toString()) {
    console.log('success');
  } else {
    console.log(a, b);
  }
}
