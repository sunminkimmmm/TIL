var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var bodyValue = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + '곱하기' + String(num2) + '는?';
document.body.append(word);

var formValue = document.createElement('form');
document.body.append(formValue);

var inputValue = document.createElement('input');
inputValue.type = 'number';
formValue.append(inputValue);

var buttonValue = document.createElement('button');
buttonValue.textContent='입력!';
formValue.append(buttonValue);

var resultValue = document.createElement('div');
document.body.append(resultValue);

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

