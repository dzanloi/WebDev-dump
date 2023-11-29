let temp = '';
let input_box = document.getElementById('input');
let ctr= false;
 
function appendNumber(number) {
    temp += number;
    input_box.textContent += number;
    if (ctr === true) {
        temp = eval(temp);
        ctr = '';
    }
}
 
function appendOperator(operator) {
    temp += operator;
    ctr = true;
    input_box.textContent = '';
}
 
function clearInput() {
    temp ='';
    input_box.textContent = '';
}
 
function calculateResult() {
    result = eval(temp);
    input_box.textContent = eval(temp);
}