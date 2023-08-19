// let value1 = document.getElementById('value1');
// let value2 = document.getElementById('value2');
// let oper = document.getElementById('oper');
// let result = document.getElementById('result');

// const calcBtn = document.querySelector('#calc');
// const resetBtn = document.querySelector('#reset');

// calcBtn.addEventListener('click', function() {
//     switch (oper.value) {
//         case '+':
//             result.value = Number(value1.value) + Number(value2.value);
//             break;
//         case '-':
//             result.value = Number(value1.value) - Number(value2.value);
//             break;
//         case '/':
//             result.value = Number(value1.value) / Number(value2.value);
//             break;
//         case '*':
//             result.value = Number(value1.value) * Number(value2.value);
//             break;
//         default:
//             alert('연산자를 +, -, *, / 중에서 입력하세요.');
//     }
// })

// resetBtn.addEventListener('click', function () {
//     value1.value = '';
//     value2.value = '';
//     oper.value = '';
//     result.value = '';
// })

//--------------------------------------------------
let user = document.getElementById('user');
let content = document.getElementById('content');
let idx = 1;

const wBtn = document.querySelector('#write');

function getDateTime() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    return `${year}-${month}-${day} ${hour} : ${minute}`;
}

wBtn.addEventListener('click', function () {
    const newTr = document.createElement('tr');

    const newIdx = document.createElement('td');
    newIdx.innerHTML = idx;
    idx++;

    const newUser = document.createElement('td');
    newUser.innerHTML = user.value;

    const newContent = document.createElement('td');
    newContent.innerHTML = content.value;

    const newDate = document.createElement('td');
    newDate.innerHTML = getDateTime();

    newTr.append(newIdx, newUser, newContent, newDate);
    document.querySelector('table').appendChild(newTr);

    user.value = '';
    content.value = '';
});
