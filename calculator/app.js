// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무되되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

var result = document.getElementById('value');

//문서 객체에 id로 접근
var undoButton = document.getElementById('undoButton'),
  addButton = document.getElementById('addButton'),
  subButton = document.getElementById('subButton'),
  redoButton = document.getElementById('redoButton'),
  inputValue = document.getElementById('inputbox');

// =====  ===== //
function onload() {
  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

//변수와 스택 생성
var num1,num2;
var stack1 = new Array();
var stack2 = new Array();

//이벤트 발생
// ===== handlClick ===== //
function handleClick(event) {
  num1 = parseInt(result.innerHTML);
  num2 = parseInt(inputValue.value);
  
  switch (event.target.id) {
    // === Undo === //
    case 'undoButton': 
       //스택1 pop하고 담기
       var popNum = stack1.pop();
       //스택2에 결과값 push
       stack2.push(num1);
       //결과값에 pop한 값 보여주기
       result.innerHTML = popNum;
       //redo버튼 보여주기
       redoButton.disabled = false;
       //스택1에 값이 있을때까지 undo버튼 보여주기
       if(stack1.length==0){
         undoButton.disabled = true;
       }
      break;

    // === Add === //
    case 'addButton':
        //입력값이 숫자인지 검사
        if(Number.isInteger(num2)){
          //input의 값은 없어진다
          inputValue.value = null;
          //스택1에 이전값 push
          stack1.push(result.innerHTML);
          result.innerHTML = num1+num2;
          undoButton.disabled = false;
          redoButton.disabled = true;
      }else{
        //입력값이 숫자아니면 input값은 없어진다
        document.getElementById('inputbox').value = null;
      }
      break;

    // === Sub === //
    case 'subButton':
      //입력값이 숫자인지 검사
        if(Number.isInteger(num2)){
          //input의 값은 없어진다
          inputValue.value = null;
          //스택1에 결과값 push
          stack1.push(result.innerHTML);
          result.innerHTML = num1-num2;
          undoButton.disabled = false;
          redoButton.disabled = false;
          
        }else{
          //입력값이 숫자아니면 input값은 없어진다
          document.getElementById('inputbox').value = null;
        }  
      break;

    // === Redo === //
    case 'redoButton':
       //스택2의 요소 pop하고 담기
        var popNum = stack2.pop();
        //스택1에 이전값 push
        stack1.push(num1);
        //결과값에 pop한 값 보여주기
        result.innerHTML = popNum;
        //undo버튼 보여주기
        undoButton.disabled = false;
        //스택2에 값이 있을때까지 undo버튼 보여주기
        if(stack2.length==0){
          redoButton.disabled=true;
        }
        
      break;

    default:
      return;
  } // switch
} // func
