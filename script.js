let currentInput = 0;
let previousInput = 0;
let currentResult = 0;
let operator = "+";

function number(num) {
  console.log(currentInput);
  currentInput = currentInput * 10 + num;
  console.log(currentInput);

  updateInput();
}

function divided() {
  performOperator();
  operator = "/";
  pushInput();
}

function multiplied() {
  performOperator();
  operator = "*";
  pushInput();
}

function subtract() {
  performOperator();
  operator = "-";
  pushInput();
}

function add() {
  performOperator();
  operator = "+";
  pushInput();
}

function enter() {
  performOperator();
  operator = "";
  pushInput();
}

function clearEntry() {
  currentInput = 0;
  operator = "+";
  previousInput = 0;
  currentResult = 0;
  updateInput();
  updatePreviousInput();
}

function performOperator() {
  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  }

  if (previousInput !== 0) {
    addCalcEntry();
  }

  previousInput = currentResult;

  currentInput = 0;
  updateInput();
}

function addCalcEntry() {
  let historyEntry = document.createElement("p");
  historyEntry.innerHTML =
    "<p>" +
    previousInput +
    operator +
    currentInput +
    "=" +
    currentResult +
    "<p />";

  document.getElementById("history").appendChild(historyEntry);
}

function updateInput() {
  document.getElementById("input").innerHTML = currentInput;
}

function updatePreviousInput() {
  document.getElementById("preStep").innerHTML = previousInput;
}

function pushInput() {
  document.getElementById("preStep").innerHTML = previousInput + operator;
}
