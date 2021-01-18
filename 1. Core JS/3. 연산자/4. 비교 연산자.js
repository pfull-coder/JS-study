
// 동등 비교
console.log(4 == 4);
console.log(5 == '5');

// 일치 비교
console.log(5 === '5');

// 불일치 비교
console.log(4 !== 4);


console.log("=============================================================");
// 동등 비교는 결과 예측이 힘들기 때문에 사용하지 않는 것을 추천
console.log('0' == ''); //false
console.log(0 == ''); //true
console.log('0' == 0); //true
console.log(false == 'false'); //false
console.log(false == '0'); //true

console.log("=============================================================");
// 일치비교에서는 NaN을 주의, NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN);
console.log(isNaN(NaN, NaN));

console.log("=============================================================");
// 대소 비교
var x = 10;
console.log(x > 5);
console.log(x <= 10);

console.log("=============================================================");
// 문자열 비교
console.log('apple' === 'APPLE'); //false
console.log('ace' < 'ade'); //true
console.log('복숭아' < '감자'); //false

// 문자열의 대소비교는 같은 형태(대문자, 소문자, 한글 ,일본어)에서는 사전 뒤에 나오는 단어일수록 크다.
// 단, 유니코드 숫자 크기로 비교하기때문에 (영문 대문자 < 영문 소문자 < 한글)


