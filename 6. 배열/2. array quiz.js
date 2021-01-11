
/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
    여기에는 학생들의 수학점수 8개가 저장됩니다. (점수는 임의로 설정)

    - 요구사항 :
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서 콘솔에 출력하세요.
    2. 학생들의 점수가 추가되어도 자동으로 총점, 평균이 갱신되어야 합니다.
*/

var scores = [50, 88, 95, 71, 86, 49, 62, 99];
var total = 0, average = 0;

for(var i = 0; i < scores.length; i++) {
    total += scores[i];
}
    average = total / scores.length;
    console.log(`학생들의 수학총점: ${total}점, 평균: ${average}점`);

    // 평균점수의 소수점이 긴 경우 원하는 자리 수 만큼 곱한 이후 나눠주면 설정이 된다.
    // var prettierAvg = Math.round(avg * 100) / 100;
