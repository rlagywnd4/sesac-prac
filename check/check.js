function solution(arr) {
  var answer = 0;
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const d = arr[3];
  const comArr = hasDuplicates(arr);
  if (comArr === 4) {
    // 모든 숫자가 같을때
    answer = 1111 * a;
  } else if (comArr === 3) {
    // 세 숫자가 같을때 , 둘 둘 숫자가 같을때
    if (a !== c && a !== d) {
      // 둘 둘 숫자가 같을때 a, b
      answer = (a + c) * Math.abs(a - c);
    } else if (a !== b && a !== d) {
      // a, c
      answer = (a + b) * Math.abs(a - b);
    } else if (a !== b && a !== c) {
      // a,d
      answer = (a + b) * Math.abs(a - b);
    } else if (a !== b && a === c) {
      // 세 숫자가 같을때 b가 다름
      answer = (10 * a + b) ** 2;
    } else if (a !== c && a === b) {
      // c가 다름
      answer = (10 * a + c) ** 2;
    } else if (a !== d && a === b) {
      // d가 다름
      answer = (10 * a + d) ** 2;
    } else {
      // a가 다름
      answer = (10 * b + a) ** 2;
    }
  } else if (comArr === 2) {
    // 두 숫자가 같을때
    if (a === b) {
      answer = c * d;
    } else if (a === c) {
      answer = b * d;
    } else if (a === d) {
      answer = b * c;
    } else if (b === c) {
      answer = a * d;
    } else if (b === d) {
      answer = a * c;
    } else {
      answer = a * b;
    }
  } else if (comArr === 1) {
    // 한 숫자가 같을때(모두 다를때)
    arr.sort();
    answer = arr[0];
  }
  return answer;
}
function hasDuplicates(array) {
  const result = array.length - new Set(array).size;
  return result + 1;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers() {
  const randomNumbers = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber = getRandomNumber(1, 6);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

for (let i = 0; i < 10; i++) {
  const result = generateRandomNumbers();
  console.log(result);
  console.log(solution(result));
  console.log('----------------------------');
}
