// 1. 중복 선언 불가능
let x = 3;
// let x = 55;
x = 55
console.log(x);


// 2. 블록 레벨 스코프 지원
let y = 10;
if (true) {
    let y = 20;
    console.log(`if의 y: ${y}`);
}

console.log(`전역레벨의 y: ${y}`);

for (let i = 0; i < 10; i++) {

}
console.log(i);


// 3. 변수 호이스팅이 일어나지 않음
z = 44;
console.log(z);

let z;