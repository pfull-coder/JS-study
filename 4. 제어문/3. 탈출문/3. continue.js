// continue는 break와 다르게 조건에 걸리는 경우
// 스킵(skip)하여 반복문을 실행한다.

/*
for (var i = 1; i < 11; i++ ) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('반복문 종료!!');
*/

while(true) {
    var n = +prompt('정수를 입력하세요.');

    if(n === 0) {
        break;

    } else if (n === 1) {
        continue;
    }

    alert('메롱메롱');
}