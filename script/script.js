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

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1 != "") {
      display.innerHTML += button.innerHTML;
    }
  });
});

clear.addEventListener("click", () => {
  return (display.innerHTML = "");
});

const mathsEquation = (num1, num2, operator) => {
  let newnum1 = Number(num1);
  console.log(num1, newnum1);
  let newnum2 = Number(num2);
  console.log(num2, newnum2);

  if (operator === "+") {
    return newnum1 + newnum2;
  } else if (operator === "-") {
    return newnum1 - newnum2;
  } else if (operator === "÷") {
    return newnum1 / newnum2;
  } else if (operator === "x") {
    return newnum1 * newnum2;
  }

  console.log(operator);
};

const handleSum = () => {
  console.log(mathsEquation(num1, num2, operator));
};

equals.addEventListener("click", handleSum);
