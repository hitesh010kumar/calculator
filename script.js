let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

function appendNumber(number) {
  if (operator === '') {
    firstOperand += number;
    document.getElementById('result').value = firstOperand;
  } else {
    secondOperand += number;
    document.getElementById('result').value = secondOperand;
  }
}

function appendOperator(op) {
  if (firstOperand !== '' && secondOperand === '') {
    operator = op;
    document.getElementById('result').value = '';
  } else if (firstOperand !== '' && secondOperand !== '') {
    calculate();
    operator = op;
  }
}

function calculate() {
  if (operator === '+') {
    result = parseFloat(firstOperand) + parseFloat(secondOperand);
  } else if (operator === '-') {
    result = parseFloat(firstOperand) - parseFloat(secondOperand);
  } else if (operator === '*') {
    result = parseFloat(firstOperand) * parseFloat(secondOperand);
  } else if (operator === '/') {
    result = parseFloat(firstOperand) / parseFloat(secondOperand);
  }
  document.getElementById('result').value = result;
  firstOperand = result.toString();
  secondOperand = '';
 
