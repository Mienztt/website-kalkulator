let num1 = "";
let num2 = "";
let operator = "";
let resultDisplayed = false;

function addNumber(value) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  if (operator === "") {
    num1 += value;
    document.getElementById("num1").innerText = num1;
  } else {
    num2 += value;
    document.getElementById("num2").innerText = num2;
  }
}

function addOperator(op) {
  if (num1 !== "") {
    operator = op;
    document.getElementById("operator").innerText = operator;
  }
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  document.getElementById("num1").innerText = "";
  document.getElementById("operator").innerText = "";
  document.getElementById("num2").innerText = "";
  document.getElementById("equalSign").innerText = "";
  document.getElementById("result").innerText = "0";
}

function calculate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let expression = `${num1} ${operator} ${num2}`;
    let result;

    try {
      if (operator === "^") {
        result = Math.pow(parseFloat(num1), parseFloat(num2));
      } else {
        result = eval(expression);
      }

      document.getElementById("equalSign").innerText = "=";
      document.getElementById("result").innerText = result;
      resultDisplayed = true;
    } catch (error) {
      document.getElementById("result").innerText = "Error";
    }
  }
}

function toggleSign() {
  if (operator === "") {
    num1 = (-parseFloat(num1)).toString();
    document.getElementById("num1").innerText = num1;
  } else {
    num2 = (-parseFloat(num2)).toString();
    document.getElementById("num2").innerText = num2;
  }
}

function factorial() {
  let number = parseInt(operator === "" ? num1 : num2);

  if (number >= 0) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    document.getElementById("equalSign").innerText = "=";
    document.getElementById("result").innerText = fact;
    resultDisplayed = true;
  } else {
    document.getElementById("result").innerText = "Error";
  }
}
