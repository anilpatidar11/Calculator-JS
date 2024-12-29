let currentNum = "";

let previousNum = "";

let operator = null;
function appendNum(num) {
  currentNum = currentNum + num;
  document.getElementById("input-ele").value = currentNum;
}

function setOperatorBtn(op) {
  previousNum = currentNum;
  currentNum = "";
  operator = op;
  document.getElementById("input-ele").value = "";
}

function equal() {
  if (!previousNum || !currentNum || !operator) return;

  const num1 = parseFloat(previousNum);
  const num2 = parseFloat(currentNum);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      document.getElementById("input-ele").value = result;
      currentNum = result.toString();
      previousNum = "";
      operator = null;
      break;

    case "-":
      result = num1 - num2;
      document.getElementById("input-ele").value = result;
      currentNum = result.toString();
      previousNum = "";
      operator = null;
      break;

    case "*":
      result = num1 * num2;
      document.getElementById("input-ele").value = result;
      currentNum = result.toString();
      previousNum = "";
      operator = null;
      break;
    case "/":
      result = num1 / num2;
      document.getElementById("input-ele").value = result;
      currentNum = result.toString();
      previousNum = "";
      operator = null;
      break;

    default:
      document.getElementById("input-ele").value = "";
  }
}

function clearInput() {
  currentNum = "";
  document.getElementById("input-ele").value = "";
}

function resetFun() {
  currentNum = "";
  previousNum = "";
  operator = null;
  document.getElementById("input-ele").value = "";
}