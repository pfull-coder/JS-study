var begin = +prompt('첫번째 정수를 입력하시오');
var end = +prompt('두번째 정수를 입력하시오');

var total = 0;
var n = begin;

while(n <= end) {
    total += n;
    n++;
}
    alert(`${begin}부터 ${end}까지의 총합은 ${total} 입니다.`);
