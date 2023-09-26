// math 모듈을 불러와 사용

// math 모듈 불러오기
// const add = require('./math');

// console.log(add);

// 모듈을 불러올때 하나만 내보낸 모듈은 이름이 달라져도 불러올 수 있음
const hello = require('./math');
console.log(hello(2, 4));
