
// prompt함수와 alert함수는 브라우저에서만 적용 가능.

// prompt함수는 기본적으로 입력 값을 문자열로 처리합니다.
// 숫자로 처리하기 위해서는 함수 앞에 +기호를 붙이세요. ex) +prompt()
var num1 = prompt('첫번째 숫자를 입력하세요.');
var num2 = prompt('두번째 숫자를 입력하세요.');
var num3 = prompt('세번째 숫자를 입력하세요.');

alert(`입력한 숫자는 ${num1}, ${num2}, ${num3}입니다. 
세 수의 합은 ${num1 + num2 + num3}입니다.`);