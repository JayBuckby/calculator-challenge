const numbers = Array.from(document.querySelectorAll(".numbers"));
const operators = Array.from(document.querySelectorAll(".operators"));
const equals = document.querySelector(".equals");
const clear = document.querySelector(".delete");
const positiveNegative = document.querySelector(".postiveNegative");
const display = document.querySelector(".display");
const decimal = document.querySelector(".decimal");

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

// positiveNegative.addEventListener("click", (event) => {
//   num1 = Number(display.innerHTML);
//   if (display.innerHTML.includes("-")) {
//     num1 = Math.abs(number);
//     display.innerHTML = num1;
//   } else {
//     num1 = -Math.abs(number);
//     display.innerHTML = num1;
//   }
// });

// decimal.addEventListener("click", () => {
//   const PLACEHOLDER = button;
// });

decimal.addEventListener("click", () => {
  if (num1.includes(".") && num2.includes(".")) {
  } else if (num2 == "") {
    display.innerHTML = `${display.innerHTML}` + ".";
    num1 += ".";
  } else {
    display.innerHTML = `${display.innerHTML}` + ".";
    num2 += ".";
  }
});

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
  } else if (operator === "%") {
    result = newNum1 / 100;
    return result;
  }
};

//newResult = result + newNum1
//return newResult

const handleSum = () => {
  const answer = mathsEquation(num1, num2, operator);
  num1 = answer;
  num2 = "";
  display.innerHTML = answer;
};

equals.addEventListener("click", handleSum);

// decimal.addEventListener("click", () => {
//   const PLACEHOLDER = button;
// });

//   else if (operator === "%") {
//       result = newNum1 % newNum2;
//       return result;
//     }
