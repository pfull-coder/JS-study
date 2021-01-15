
// 곱셈 2단

let table = 2;
console.log('===========');
console.log(`구구단 ${table}단`);
console.log('===========');

for(let number = 1; number < 10; number++) {
    console.log(`${table} × ${number} = ${table * number}`);
}

// random multiplication table
table = Math.floor(Math.random() * 8) + 2;

console.log('===========');
console.log(`구구단 ${table}단`);
console.log('===========');

for(number = 1; number < 10; number++) {
    console.log(`${table} × ${number} = ${table * number}`);
}


//multiplication table 반복
for (let table = 2; table < 10; table++) {

    console.log('============');
    console.log(`구구단 ${table}단`);
    console.log('============');
    
    for(var number = 1; number < 10; number++) {
        console.log(`${table} × ${number} = ${table * number}`);
    }
}
