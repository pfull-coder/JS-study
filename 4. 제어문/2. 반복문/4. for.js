var total = 0;

for (var n = 1; n <= 10; n++) {
    total += n;
}
console.log(`총합: ${total}`);



console.log('==============================================');
// 1 ~ 100 까지의 누적 총합

var total = 0; // 누적 총합을 저장해둘 변수

for(var n = 1; n <= 100; n++) {
    total += n;
}
console.log(`총합: ${total}`);

// 7 ~ 100에서 7의 배수 모두 출력
for(var num = 7; num <= 100; num += 7) {
    console.log(num);
}
console.log(`while 종료 후 num: ${num}`); // while이 false가 될때까지 작동하기 때문에 num의 값이 "105"로 종료된다.


console.log('==============================================');
// 1 ~ 100에서 13의 배수 모두 출력

for(var num = 1; num <= 100; num++) {
    if(num % 13 === 0) {
      console.log(num);
    }
}

console.log('==============================================');
// 1 ~ 100에서 6의 배수이면서 12의 배수가 아닌 수 출력

for(num = 1; num <= 100; num++ ) {
    if(num % 6 === 0 && num % 12 !== 0) {
        console.log(num);
    }
}

console.log('==============================================');
// 1 ~ 4000 사이의 정수 중 9의 배수인 수의 개수를 출력

var count = 0;

for(var number = 1; number <= 4000; number++) {
    if(number % 9 === 0) {
        count++;
    }     
}
console.log(`9의 배수인 수는 총: ${count}개`);