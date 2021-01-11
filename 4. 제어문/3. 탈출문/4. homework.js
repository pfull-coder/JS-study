/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

//정오답 횟수 카운트 변수
var correctCount = 0, incorrectCount = 0;

while (true) {
   
   //0 이상 101미만
   var firstNumber = Math.floor(Math.random() * 101);
   var secondNumber = Math.floor(Math.random() * 101);   

   //랜덤 숫자 0,1 이 등장하도록 변수 선언.
   //0: +, 1: - 
   var operatorNumber = Math.floor(Math.random() * 2);

   //랜덤 연산자 기호 만들기
   // var operatorMark = (operatorNumber === 0) ? '+' : '-';
   var operatorMark;
   if (operatorNumber === 0) {
      operatorMark = '+';
   } else {
      operatorMark = '-';
   }

   // 실제 정답
   var total;
   if (operatorMark === '+') {
      total = firstNumber + secondNumber;
   } else {
      total = firstNumber - secondNumber;
   }

   // 일단 사용자가 입력한 답안
   var userAnswser = +prompt(`${firstNumber} ${operatorMark} ${secondNumber} = ??`);
   // alert(typeof userAnswser);
   
   if (userAnswser === 0) {
      break;
   }
   
   //정답 오답 판별
   if (userAnswser === total) {
      alert('정답입니다!');
      correctCount++;
   } else {
      alert('오답입니다!');
      incorrectCount++;
   }
}//반복문 종료

alert(`프로그램이 종료되었습니다.
\n# 정답 횟수: ${correctCount}회, 오답 횟수: ${incorrectCount}회`);