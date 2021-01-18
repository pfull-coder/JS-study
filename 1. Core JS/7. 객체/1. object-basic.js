// 객체 생성

var dog = {
    name: '까망',
    kind: '도베르만',
    age: 3,
    favorite: ['산책', '간식']
};

var cat = {
    name: '나비',
    kind: '러시안블루',
    age: 2,
    favorite: ['낮잠', '캔참치', '캣타워']
};


console.log(typeof dog);

// 객체 프로퍼티 참조
console.log(dog.name);
console.log(cat.age);

console.log(dog.favorite);
console.log(cat.favorite[2]);

dog.favorite.push('꼬리흔들기')
console.log(dog.favorite);

console.log(`==========================================`);
// 프로퍼티 참조 2번째 방법
// console.log(dog.age);
console.log(dog['age']); // 대괄호로 참조할때는 문자열로 키를 만들어줘야 함.

console.log(`==========================================`);
// 프로퍼티 값 수정
dog.age = 5;
console.log(dog);

cat.favorite[1] = '생선';
console.log(cat.favorite);

console.log(`==========================================`);
// 프로퍼티 동적 추가
dog.owner = '김철수';
console.log(dog);

// 프로퍼티 삭제
delete dog.owner;
console.log(dog);

//for ~ in (ES6에서 추가)
console.log(`==========================================`);

for (var key in cat) {
    // console.log(key);
    console.log(cat[key]);
}

var temp = {a: 1, b:2, c:3};

for (var key in temp) {
    console.log(temp[key]);
}


var arr = [];
var obj = {};

obj.x = 10;
obj.y = 20;

console.log(obj);


console.log('============================');

//객체의 프로퍼티 키 존재 여부 확인
var flag = 'kind' in cat;
console.log(`존재 여부: ${flag}`);

console.log('====================');

var key = 'hobby';

if (key in cat) {
    console.log('해당 키는 존재합니다.');
} else {
    console.log('해당 키는 없는 키입니다.');
}