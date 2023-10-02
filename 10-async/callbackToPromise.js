// function call(name) {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log(name);
//       res(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       console.log('back');
//       res('back');
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (res, rej) {
//     setTimeout(function () {
//       res('promise hell');
//     }, 1000);
//   });
// }

// 실습: callback -> promise

// call('kim')
//   .then(function (result) {
//     console.log(`${result} 반가워`);
//     return back();
//   })
//   .then(function (result) {
//     console.log(`${result} 을 실행했구나`);
//     return hell();
//   })
//   .then(function (result) {
//     console.log(`여기는 ${result}`);
//   });

// 실습: promise -> async/await

// async function exec() {
//   let user = await call('kim');
//   console.log(user + '님 환영합니다.');
//   let ba = await back();
//   console.log(ba + '을 실행했구나');
//   let hello = await hell();
//   console.log('여기는 ' + hello);
// }

// exec();

// 실습: 프로미스로 배경색 변경
function changeRed() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'red';
      res();
    }, 1000);
  });
}
function changeOrange() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'orange';
      res();
    }, 1000);
  });
}
function changeYellow() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'yellow';
      res();
    }, 1000);
  });
}
function changeGreen() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'green';
      res();
    }, 1000);
  });
}
function changeBlue() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      document.body.style.backgroundColor = 'blue';
      res();
    }, 1000);
  });
}

changeRed()
  .then(function (result) {
    return changeOrange();
  })
  .then(function (result) {
    return changeYellow();
  })
  .then(function (result) {
    return changeGreen();
  })
  .then(function (result) {
    return changeBlue();
  });
