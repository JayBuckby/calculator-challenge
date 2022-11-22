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
  });
  if (operator == "") {
    num1 += button.innerHTML;
  } else {
    num2 += button.innerHTML;
  }
});
console.log(numbers);

operators.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (num1 != "") {
      operator = button.innerHTML;
    }
    display.innerHTML += button.innerHTML;
  });
});

equals.addEventListener("click", () => handleSum);

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  return (display.innerHTML = "");
});

const mathsEquation = (num1, num2, operator) => {
  let newNum1 = Number(num1);
  console.log(newNum1);
  let newNum2 = Number(num2);
  console.log(newNum2);
  if (operator === "+") {
    return newNum1 + newNum2;
  } else if (operator === "-") {
    return newNum1 - newNum2;
  } else if (operator === "÷") {
    return newNum1 / newNum2;
  } else if (operator === "x") {
    return newNum1 * newNum2;
  }
};

const handleSum = () => {
  console.log(mathsEquation(num1, num2, operator));
};

equals.addEventListener("click", handleSum);
