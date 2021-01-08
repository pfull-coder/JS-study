// 난수(랜덤값) 생성 함수
// Math.random(); >> 0.0이상 1.0미만의 랜덤값 생성

var randomNumber = Math.random();
// console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log(`오늘의 추천음식: 짜장면`);
} else if (randomNumber > 0.33) {
    console.log(`오늘의 추천음식: 돈까스`);
} else {
    console.log(`오늘의 추천음식: 편의점 도시락`);
}

console.log(`======================================================`);
//Math.floor() : 내림 값
//Math.ceil() : 올림 값
//Math.round() : 반올림 값

console.log(Math.floor(3.3));
console.log(Math.ceil(3.3));
console.log(Math.round(3.3));

console.log(`======================================================`);
// 0이상 10미만의 랜덤 정수 만들기
// var randomInt = Math.random() * 10;
// randomInt = Math.floor(randomInt);
var randomInt = Math.floor(Math.random() * 10);

console.log(`랜덤 정수: ${randomInt}`);

console.log(`======================================================`);
// 11(이상) ~ 38(미만)
var randomInt2 = Math.floor(Math.random() * 27) + 11;

/*
# x ~ y (이상 미만개념)의 랜덤 정수 생성 공식

- Math.floor(Math.random() * (y - x) ) + x;

*/

// 1(이상) ~ 45(이하)
var lottoNum = Math.floor(Math.random() * 45) + 1;
console.log(`랜덤 로또번호: ${lottoNum}`);