let currentInput = 0;
let previousInput = 0;
let operator = "";

function number(num) {
  console.log(currentInput);
  currentInput = currentInput * 10 + num;
  console.log(currentInput);

  updateInput();
}

function divided() {
  performOperator();
  operator = "/";
  currentInput = 0;
  pushInput();
  updateInput();
}

function multiplied() {
  performOperator();
  operator = "*";
  currentInput = 0;
  pushInput();
  updateInput();
}

function subtract() {
  performOperator();
  operator = "-";
  currentInput = 0;
  pushInput();
  updateInput();
}

function clear() {
  performOperator();
  operator = "";
  currentInput = 0;
  pushInput();
  updateInput();
}

function enter() {
  performOperator();
  operator = "=";
  currentInput = 0;
  updateInput();
  pushInput();
}

function add() {
  performOperator();
  operator = "+";
  currentInput = 0;
  updateInput();
  pushInput();
}

function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  }

  previousInput = currentResult;
}

function updateInput() {
  document.getElementById("input").innerHTML = currentInput;
}

function pushInput() {
  document.getElementById("preStep").innerHTML = previousInput + "+";
}
