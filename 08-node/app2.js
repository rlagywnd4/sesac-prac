// math2 모듈을 불러와 사용

// math2 모듈 불러오기
const math = require('./math2');

console.log(math.add(2, 4));
console.log(math.sub(2, 4));
console.log(math.mul(2, 4));
console.log(math.div(2, 4));

// console.log(math.animal.frog()); 객체로 이렇게 사용가능

// 객체 구조분해
const { add, PI, E } = require('./math2');

console.log(PI);
console.log(E);
console.log(add(2, 4));
