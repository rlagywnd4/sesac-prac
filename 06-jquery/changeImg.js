$('.apple').on('click', function () {
  $('.fruit').attr('src', './img/apple.jpg');
});
$('.bananas').on('click', function () {
  $('.fruit').attr('src', './img/bananas.jpg');
});
$('.grapes').on('click', function () {
  $('.fruit').attr('src', './img/grapes.jpg');
});
$('.peaches').on('click', function () {
  $('.fruit').attr('src', './img/peaches.jpg');
});

// addClass, removeClass, hasClass에는 선택자가 아니라 클래시 이름을 적을것
// TODO: 조건을 만족하는 jquery 코드 작성
// .bg-red 클래스 있다면, .bg-red 제거, .bg-orange 추가
$('.box').on('click', function () {
  if ($('.box').hasClass('bg-red')) {
    $('.box').removeClass('bg-red');
    $('.box').addClass('bg-orange');
  }
// .bg-orange 클래스 있다면, .bg-orange 제거, .bg-yellow 추가
else if ($('.box').hasClass('bg-orange')) {
  $('.box').removeClass('bg-orange');
  $('.box').addClass('bg-yellow');
}
// .bg-yellow 클래스 있다면, .bg-yellow 제거, .bg-red 추가
else if ($('.box').hasClass('bg-yellow')) {
  $('.box').removeClass('bg-yellow');
  $('.box').addClass('bg-red');
}
});