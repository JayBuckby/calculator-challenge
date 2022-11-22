const numbers = Array.from(document.querySelectorAll(".numbers"));
const operators = Array.from(document.querySelectorAll(".operators"));
const equals = document.querySelector(".equals");
const clear = document.querySelector(".delete");
const positiveNegative = document.querySelector(".postiveNegative");
const display = document.querySelector(".display");

let num1 = "";
let num2 = "";
let operator = "";

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
    if (operator == "") {
      num1 += button.innerHTML;
    } else {
      num2 += button.innerHTML;
    }
  });
});

operators.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (num1 != "") {
      operator = button.innerHTML;
    }
    display.innerHTML += button.innerHTML;
  });
});

// positiveNegative.addEventListener("click", () => {
//   // if num = 18 make -18
//   // else if num = -18  make 18
// });

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  return (display.innerHTML = "");
});

const mathsEquation = (num1, num2, operator) => {
  let newNum1 = Number(num1);
  let newNum2 = Number(num2);
  let result;
  if (operator === "+") {
    result = newNum1 + newNum2;
    return result;
  } else if (operator === "-") {
    result = newNum1 - newNum2;
    return result;
  } else if (operator === "÷") {
    result = newNum1 / newNum2;
    return result;
  } else if (operator === "x") {
    result = newNum1 * newNum2;
    return result;
  }
};

const handleSum = () => {
  display.innerHTML = mathsEquation(num1, num2, operator);
};

equals.addEventListener("click", handleSum);
