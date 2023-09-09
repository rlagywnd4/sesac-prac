const express = require('express');
const app = express();
const PORT = 8080;

//express 템플릿 엔진 종류 등록
app.set('view engine', 'ejs'); //express에서 사용할 템플릿 엔진 종류(ejs) 등록
// app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록

// (http://localhost:8080/public/image/dog.jpg) 이렇게 하면 개사진 뜸
// 파일이름을 가리기 위해서(보안문제) 이렇게 함
app.use('/views', express.static(__dirname + '/views')); // 템플릿 엔진 파일 저장할 위치 이렇게도 가능
app.use('/public', express.static(__dirname + '/static')); // 미들웨어 등록

// (임시) 데이터베이스에서 가져온 회원정보
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/': 서버주소: 포트번호 (Localhost:8080/)
app.get('/', function (request, response) {
  //   response.send('x'); x를 클라이언트한테 응답으로 보냄
  //   response.send('<h1>Hello! Express!!</h1>');

  // response.render('ejs_filename'); ejs file 이름을 찾아서 응답
  response.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['버튼 1', '버튼 2', '버튼 3'],
    me: {
      name: 'hyojung',
      msg: '저는 효중입니다. 반갑습니다.',
    },
    isLogin: false,
  });
});

// '/sesac' 경로(서버주소:포트번호/sesac)로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보여주기
app.get('/sesac', function (request, response) {
  response.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /Login 경로로 요청이 들어오면 로그인 페이지를 응답
app.get('/login', function (request, response) {
  response.render('login');
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (request, response) {
  response.render('register');
});

// 서버가 실행할 PORT 지정하고 실행했을 때 콘솔로그를 찍음
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
