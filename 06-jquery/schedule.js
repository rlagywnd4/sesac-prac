let date;

$('td').on('click', function () {
  $('#date').val(this.innerText);
  date = this;
});

$('button').on('click', function () {
  const text = $('#content').val();
  date.innerHTML += `<div>${$('#content').val()}</div>`;
});
