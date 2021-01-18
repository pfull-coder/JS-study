
// 1 ~ 10000 까지의 누적 총합

var total = 0; // 누적 총합을 저장해둘 변수
var n = 1; // 숫자를 지속적으로 변경할 변수

while(n <= 100) {
    total += n;
    n++;
}

console.log(`총합: ${total}`);

// 1 ~ 100에서 7의 배수 모두 출력
var num = 7;
while(num <= 100) {
    console.log(num);
    num += 7;
}

console.log(`while 종료 후 num: ${num}`); // while이 false가 될때까지 작동하기 때문에 num의 값이 "105"로 종료된다.


console.log('==============================================');
// 1 ~ 100에서 13의 배수 모두 출력

num = 1;
while(num <= 100) {
    if(num % 13 === 0) {
      console.log(num);
    }
    num++;
}

console.log('==============================================');
// 1 ~ 100에서 6의 배수이면서 12의 배수가 아닌 수 출력

num = 1;
while(num <= 100 ) {
    if(num % 6 === 0 && num % 12 !== 0) {
        console.log(num);
    }
    num++
}

console.log('==============================================');
// 1 ~ 4000 사이의 정수 중 9의 배수인 수의 개수를 출력

var number = 1;
var count = 0;

while(number <= 4000) {
    if(number % 9 === 0) {
        count++;
    }
    number++;
}
    console.log(`9의 배수인 수는 총: ${count}개`);
    


