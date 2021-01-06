

// money 변수에 돈의 액수를 정수 형태로 저장하고 money의 값이 5000 이상이면
// '김치찌개'를 5000 미만이면 '라면'을 food 변수에 저장시키는 logic을 작성

// var money = 4000;

// var food = money >= 5000? '김치찌개' : '라면'

// console.log(`오늘의 밥상: ${food}`);


var money = +prompt(`가지고 있는 돈을 입력하세요.`)
var food = money >= 5000? '김치찌개' : '라면'

alert(`오늘의 밥상은 ${food} 입니다. 식사 맛있게 하세요!!`)