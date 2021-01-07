
var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt('당신의 나이는?');

    if (age >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else {
        alert('기준 나이를 통과하지 못하여 놀이기구를 탈 수 없습니다.')
    }
} else {
    alert('기준 키를 통과하지 못하여 놀이기구를 탈 수 없습니다.')
}
