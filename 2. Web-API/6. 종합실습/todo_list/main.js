// 일정 데이터가 들어 있는 배열 선언
const todos = [];
// const todos = [
//     {
//         id: 1,
//         text: '할 일 1',
//         done: true
//     },
//     {
//         id: 2,
//         text: '할 일 2',
//         done: false
//     },
//     {
//         id: 3,
//         text: '할 일 3',
//         done: false
//     }
// ];

// 새로운 할 일의 id값을 만들어주는 함수
function makeNewId() {
    if (todos.length > 0) {
        const lastIndex = todos.length - 1;
        // console.log(todos[lastIndex].id);
        return todos[lastIndex].id + 1;
    } else {
        return 1;
    }
}

// 화면에 추가할 todo-list-item 노드를 생성하는 함수
function makeNewToDoNode(newToDo) {
    const $itemLi = document.createElement('li');
    const $label = document.createElement('label');
    const $div = document.createElement('div');

    // label 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox"> 
    <span class="text">${newToDo.text}</span>`;

    // div 태그 작업
    $div.classList.add('remove');
    $div.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    // li 태그 작업
    $itemLi.dataset.id = newToDo.id;
    $itemLi.classList.add('todo-list-item');
    $itemLi.appendChild($label);
    $itemLi.appendChild($div);

    // console.log($itemLi); <----- debugging
    return $itemLi;
}

// 할 일 추가 처리 함수
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');
    
    // 사용자가 입력을 하지 않았을 때 함수를 종료 시켜야함.
    // trim() : 문자열의 앞 뒤 공백을 제거.
    if ($todoText.value.trim() === '') {
        alert('입력된 내용이 없습니다. 내용을 입력해주세요!');
        
        $todoText.value = '';
        return;
    }

    // 1. todos 배열에 객체를 setting.
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    // console.log(newToDo);

    // 2. todos 배열에 해당 객체를 삽입
    todos.push(newToDo);
    //console.log(todos);

    // 3. 추가된 데이터를 화면에 렌더링
    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild(makeNewToDoNode(newToDo));

    // 4. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

// 배열 인덱스 탐색 함수(dataId 이용)
function findIndexByDataId(dataId) {

    for (let i=0; i < todos.length; i++) {
        let todo = todos[i];
        if (dataId === todo.id) {
            return i;
        }
    }
    return null;
}

// 체크 박스 이벤트의 세부처리 수행 함수
function changeCheckState($checkbox) {
    // 1. label에 클래스 checked를 추가.
    //    이 함수는 label 노드를 가지고 있어야 한다.
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');
/*
   if ($checkbox.checked === true) {
       $label.classList.add('checked');
   } else {
       $label.classList.remove('checked');
   }
*/
    // 2. 실제로 서버가 있다면 서버에도 체크 상태를
    //    반영해야 하고 배열의 done값을 변경해야 함.
    const $li = $label.parentElement;
    const dataId = +$li.dataset.id;
    // console.log(dataId); <----- debugging

    // 3. 배열을 탐색하여 data-id와 일치하는 
    //    id프로퍼티를 가진 객체의 인덱스를 얻어옴.
    const foundIndex = findIndexByDataId(dataId);

    // 4. 찾아낸 인덱스로 배열에서 해당 객체 접근한 뒤 done을 수정.
    todos[foundIndex].done = !todos[foundIndex].done;

    console.log(todos[foundIndex]);

}

// 리스트 삭제 처리 수행 함수
function removeToDoData($delSpan) {
    //1. DOM 요소 삭제
    const $delLi = $delSpan.parentElement.parentElement;
    // console.log($delLi); <----- debugging

    document.querySelector('.todo-list').removeChild($delLi);

    //2. 배열에서도 삭제
    const dataId = +$delLi.dataset.id;
    const foundIndex = findIndexByDataId(dataId);
    if (foundIndex !== null) {
        todos.splice(foundIndex, 1);
    }
    console.log(todos);
}

// 메인 실행 함수
(function () {

    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', function (e) {
        e.preventDefault(); //버튼의 서버 전송 기능을 막음.
        //console.log('추가 버튼이 잘 클릭됩니다~'); <----- debugging

        insertToDoData();
    });

    // 일정 리스트 체크박스 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    $todoList.addEventListener('change', function(e) {
        // 버그 예방을 위한 타겟 정리.
        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }
        //console.log('체크박스 이벤트 실행됨!');    
        //console.log(e.target.parentElement);      <----- debugging
        changeCheckState(e.target);
    });

    // 리스트 삭제 이벤트
    $todoList.addEventListener('click', function(e) {
        // console.log(e.target);
        if (!e.target.matches('.todo-list div.remove span')) {
            return;
        }

        removeToDoData(e.target);
    });

}());