//Assigning elements from HTML to variables in JS
const numbers = Array.from(document.querySelectorAll(".numbers"));
const operators = Array.from(document.querySelectorAll(".operators"));
const equals = document.querySelector(".equals");
const clear = document.querySelector(".delete");
const positiveNegative = document.querySelector(".positiveNegative");
const display = document.querySelector(".display");
const decimal = document.querySelector(".decimal");

//Assigning a let variable to have an empty string so we can use this later to store numbers and operator.
let num1 = "";
let num2 = "";
let operator = "";

//Take our Array of numbers, loop through each of them individually and run a function so that when a number button is clicked, display that number on screen and assign it to the num1 variable, once num1 is assigned, move on to num2 and do the same. Little easter egg added.

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
    if (display.innerHTML === "8008135") {
      alert("Think you're funny huh?");
    }
    if (operator == "") {
      num1 += button.innerHTML;
    } else {
      num2 += button.innerHTML;
    }
  });
});

// Take our Array of operators, loop through each of them individually and run a function so that when that operator button is clicked, display the operator on screen and assign it to the operator variable.
operators.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (num1 != "") {
      operator = button.innerHTML;
    }
    display.innerHTML += button.innerHTML;
  });
});

// When the +/- button is clicked, take the number stored in the num1 variable and if it starts as a minus number, turn it into a positive number, otherwise if it's a positive number, invert it to be negative.
positiveNegative.addEventListener("click", (event) => {
  num1 = Number(display.innerHTML);
  if (display.innerHTML.includes("-")) {
    num1 = Math.abs(num1);
    display.innerHTML = num1;
  } else {
    num1 = -Math.abs(num1);
    display.innerHTML = num1;
  }
});

//If both numbers already have a decimal in them, do nothing. Else if num2 is empty, allow num1 to include a decimal. Otherwise, let num2 include a decimal.
decimal.addEventListener("click", () => {
  if (num1.includes(".") && num2.includes(".")) {
  } else if (num2 === "") {
    display.innerHTML = `${display.innerHTML}` + ".";
    num1 += ".";
  } else {
    display.innerHTML = `${display.innerHTML}` + ".";
    num2 += ".";
  }
});

//When AC button is clicked, clear all values in variables and the display.
clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  return (display.innerHTML = "");
});

//Creates a function that takes the num string entry and converts it to a number and reassigns it to a new variable. Then runs through an IF ELSE/IF statement depending on the operator selection to return the selected result.
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

//Creates a function that stores the mathsEquation function into a variable and then allows num1 to use that value for continuos calculations. Displays the answer of the logic on screen.
const handleSum = () => {
  const answer = mathsEquation(num1, num2, operator);
  num1 = answer;
  num2 = "";
  display.innerHTML = answer;
};

//When user clicks on the = button it runs the handleSum function.
equals.addEventListener("click", handleSum);
