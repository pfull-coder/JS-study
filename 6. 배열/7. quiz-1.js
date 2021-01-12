/*
- 배열과 관련된 연산을 수행하세요.
1. 요소 Jazz, Blues가 있는 styles 배열을 생성합니다.
2. Rock-n-Roll을 배열 끝에 추가합니다.
3. 배열의 첫 번째 요소를 꺼내서 출력합니다.
4. Rap, Reggae를 배열의 앞에 추가합니다.
 - 단계를 거치면서 아래와 같이 배열이 변해야합니다.
 Jazz Blues
 Jazz Blues Rock-n-Roll
 Blues Rock-n-Roll
 Rap Reggae Blues Rock-n-Roll

*/

var styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
console.log(styles.shift());
styles.unshift('Reggae')
styles.unshift('Rap')

console.log(styles);