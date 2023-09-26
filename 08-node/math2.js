// math module
// add 더하기 함수를 정의한 파일
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const E = 2.718;
const PI = 3.141592;

// const animal = {
//   dog: 1,
//   cat: 'meow',
//   frog: function () {
//     console.log('jump');
//   },
// };

// case1. 객체로 감싸서 내보내기
module.exports = {
  add,
  sub,
  mul,
  div,
  E,
  PI,
  // animal, 이렇게 obj도 내보낼 수 있음
};

// case2. 하나씩 내보내기
// module.exports.add = add;
// module.exportsPI = PI;
// module.exports.E = E;

// case2를 더 간단히!
// exports.add = add;
// exports.PI = PI;
// exports.E = E;

// 위 코드와 동일, obj에서 key, value가 동일 할때 생략 가능
// module.exports = {
//   add: add,
//   PI: PI,
//   E,
// };
