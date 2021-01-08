
/*
- Quiz.
아래 요구사항에 맞는 코드를 작성하고 브라우저에서 실행하여 테스트하세요.

- 요구사항
1. 프로그램 실행 시 0 ~ 100 사이의 무작위 두 수의 합을
   물어보는 문제가 지속적으로 출제되도록 하세요.
   ex) 55 + 23 = ??

2. 올바른 답을 입력할 시 "정답입니다"를 틀린 답을
   입력할 시 "오답입니다"를 출력하세요.

3. 사용자가 0을 입력하면 문제 출제를 중단하고 누적된
   정답 횟수와 오답 횟수를 출력하세요.

*/


var num1, num2 = 0
var answer = 0;
var countCorrect;
var countFault;

while (true) {
    console.log(`문제를 풀어보세요. ${Math.floor(Math.random(num1) * 101)} + ${Math.floor(Math.random(num2) * 101)}`);
    answer = +prompt(`정답을 입력하세요.`)

    if (answer === num1 + num2) {
        alert(`정답입니다!`);
    } else {
        alert(`오답입니다!`);
    }
        
    
    if (num1 === 0 || num2 === 0) {
        break;
    }

}
console.log(`정답 횟수: ${countCorrect}, 오답 횟수: ${countFault} 수고하셨습니다.`);

