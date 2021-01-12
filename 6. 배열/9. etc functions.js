// indexOf() : 배열 요소의 인덱스를 출력.

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// 탐색에 실패하면 -1을 출력함.
var idx = foods.indexOf('김말이');
console.log(`찾은 인덱스: ${idx}번`);

console.log(`===========================================`);
// includes() : 배열 요소의 존재 여부 확인
var result = foods.includes('닭꼬치');
console.log(`탐색결과: ${result}`);

console.log(`===========================================`);
// slice() : 배열을 잘라서 복사함.
var arr = [0,1,2,3,4,5,6,7,8,9];

var slicedArr = arr.slice(3, 7)
console.log(slicedArr);

var slicedFoods = foods.slice(0, 2)
console.log(slicedFoods);

console.log(`===========================================`);
// reverse(): 배열을 역순으로 배치. 단, 원본을 변화시키기 때문에 주의!

// 원본을 유지하고 싶다면 복사본을 만들어서 사용
var copyArr = arr.slice(0);
copyArr.reverse();
console.log(copyArr);

// arr.reverse();
console.log(arr);

console.log(`===========================================`);
//join(): 배열의 요소들을 연결한 문자열로 변환
//join 매서드에 구분자 문자열을 넣으면 요소 사이에 삽입. 기본값은 ,(콤마).
var foodStr = foods.join('@');
console.log(foodStr);