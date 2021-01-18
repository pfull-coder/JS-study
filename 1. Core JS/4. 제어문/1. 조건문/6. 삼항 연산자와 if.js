
// var money = 5000;

// var food = money >= 5000 ? '김치찌개' : '라면';

/*
var food;
if (money >= 5000) {
    food = '김치찌개';
} else {
    food = '라면';
}
*/

var money = 4000;

var food;
if (money >= 5000) {
    food = '김치찌개';
} else if (money >= 3000) {
    food = '라면';
} else {
    food = '굶어!'
}

console.log(`선택된 음식: ${food}`);