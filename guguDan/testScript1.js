var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var bodyValue = document.body;

//문서 객체 생성
var word = document.createElement('div');
//생성한 태그 안의 글 
word.textContent = String(num1) + '곱하기' + String(num2) + '는?';
//<body>태그 안에 부착
document.body.append(word);

//폼 객체 생성
var formValue = document.createElement('form');
//<body>태그 안에 부착
document.body.append(formValue);

//입력폼 객체 생성
var inputValue = document.createElement('input');
inputValue.type = 'number';
//<form>태그 안에 부착
formValue.append(inputValue);

//버튼 객체 생성
var buttonValue = document.createElement('button');
buttonValue.textContent='입력!';
//<form>태그 안에 부착
formValue.append(buttonValue);

//문서 객체 생성
var resultValue = document.createElement('div');
//<body>태그 안에 부착
document.body.append(resultValue);

//폼 태그 안에 이벤트 발생시
formValue.addEventListener('submit',function callback(e){
    e.preventDefault();
        if(result === Number(inputValue.value)){
        resultValue.textContent = '딩동댕';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;
        word.textContent = String(num1) + '곱하기' + String(num2) + '는?';
        inputValue.value = '';
        inputValue.focus();
    }else{
        resultValue.textContent = '땡';
        inputValue.value = '';

    }

})

