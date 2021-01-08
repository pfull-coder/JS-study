console.log('==============================================');
// 곱셈 2단

var table = 2;
console.log('============');
console.log(`구구단 ${table}단`);
console.log('============');

for(var number = 1; number < 10; number++) {
    console.log(`${table} × ${number} = ${table * number}`);
}

console.log('==============================================');
// 랜덤 구구단

var table = Math.floor(Math.random() * 8) + 2;
console.log('============');
console.log(`구구단 ${table}단`);
console.log('============');

for(var number = 1; number < 10; number++) {
    console.log(`${table} × ${number} = ${table * number}`);
}