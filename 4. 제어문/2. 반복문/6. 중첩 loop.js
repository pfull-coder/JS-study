
/*
//구구단 반복
for (var table = 2; table < 10; table++) {

    console.log('============');
    console.log(`구구단 ${table}단`);
    console.log('============');
    
    for(var number = 1; number < 10; number++) {
        console.log(`${table} × ${number} = ${table * number}`);
    }
}
*/

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 2; k++) {
            console.log(`${i} ${j} ${k}: 안녕하세요!`);
        }
    }
}