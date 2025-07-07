let operand1 = "";     
let operand2 = "";     
let operator = "";      
let currentInput = "operand1"; 

const display = document.getElementById("display");


function appendValue(value) {
  if (currentInput === "operand1") {
    operand1 += value;
    display.value = operand1;
  } else {
    operand2 += value;
    display.value = operand1 + operator + operand2;
  }
}


function setOperator(op) {
  if (operand1 === "") return;
  operator = op;
  currentInput = "operand2";
  display.value = operand1 + operator;
}


function clearDisplay() {
  operand1 = "";
  operand2 = "";
  operator = "";
  currentInput = "operand1";
  display.value = "";
}


function backspace() {
  if (currentInput === "operand2" && operand2 !== "") {
    operand2 = operand2.slice(0, -1);
    display.value = operand1 + operator + operand2;
  } else if (operator !== "") {
    operator = "";
    currentInput = "operand1";
    display.value = operand1;
  } else {
    operand1 = operand1.slice(0, -1);
    display.value = operand1;
  }
}


function calculate() {
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    display.value = "Error";
    return;
  }

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num2 === 0 ? "Divide by 0" : num1 / num2;
  else if (operator === "%") result = num1 % num2;
  else result = "Invalid";

  display.value = result;
  
  operand1 = result.toString();
  operand2 = "";
  operator = "";
  currentInput = "operand1";
}
