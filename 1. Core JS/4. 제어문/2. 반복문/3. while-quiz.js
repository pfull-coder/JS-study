let begin = +prompt("첫번째 정수를 입력하시오.");
let end = +prompt("두번째 정수를 입력하시오.");

let total = 0;

// const numbers = [begin, end];

if (begin > end) {
    let temp = begin;  
    begin = end; 
    end = temp;
}

for (let n = begin; n <= end; n++) {
    total += n;
}
   
alert(`${begin}부터 ${end}까지의 합은 ${total}입니다.`)

