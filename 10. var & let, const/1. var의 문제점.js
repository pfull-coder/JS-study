// 1. 변수 중복선언 허용

var x = 100;
var x = 1;
console.log(x);

// 2. 블록 레벨 스코프 지원 X
var y = 1;

for (var y = 1; y < 3; y++ ) {}
console.log(y);

// 3. 변수 호이스팅
n = 10;
console.log(`n: ${n}`);

var n;