
var num = +prompt(`숫자를 입력하세요`);
if (num % 2 === 0 || num % 2 === 1) {
    alert('입력하신 숫자는 정수입니다.')
} else {
    alert('입력하신 숫자는 정수가 아닙니다.')
}

if (num === 0) {
    alert('입력하신 숫자는 0입니다.');
} else if (num % 7 === 0) {
    alert('입력하신 숫자는 7의 배수입니다.');
} else {
    alert('입력하신 숫자는 7의 배수가 아닙니다.')
}


/* 
if (num === 0) {
    alert('입력하신 숫자는 0입니다.');
} else if (num % 7 === 0) {
    alert('입력하신 숫자는 7의 배수입니다.');
} else {
    alert('입력하신 숫자는 7의 배수가 아닙니다.')
}
*/