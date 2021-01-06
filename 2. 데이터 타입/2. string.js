
var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `你好 吗`;

console.log(typeof greeting);

var exStr = "그는 나에게 '위험해!' 라고 말했다.";
console.log(exStr);

exStr = `Let's go! "TOGETHER!"`
console.log(exStr);

// var template = '<ul>\n\t<li>\n\t\t<a href="#">Home</a>\n\t</li>\n</ul>';
var template = `<ul>
    <li>
        <a href ="#">Home</a>
    </li>
<ul>`
console.log(template);

console.log("===================================================================");

var month = 4;
var day = 5;
var anniversary = '식목일';

// console.log(month + '월 ' + day + '일은 ' + anniversary + '이에요');

console.log(`${month}월 ${day}일은 ${anniversary}에요~`); // ``(backtick)으로만 사용 가능한 문법

