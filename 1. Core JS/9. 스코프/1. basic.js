var x = 10;

function foo() {
    var y = 20;
    console.log(x);
    console.log(y);
    
}

foo();
// console.log(x); ---- 전역 레벨 스코프 참조 가능.
// console.log(y); ---- 함수 레벨 스코프 참조 불가능.

var v1 = 'global';

function bar() {
    var v1 = 'local';
    console.log((`v1: ${v1}`));
}


console.log((`v1: ${v1}`));