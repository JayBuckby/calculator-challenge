const numbers = Array.from(document.querySelectorAll(".numbers"));
const operators = Array.from(document.querySelectorAll(".operators"));
const equals = document.querySelector(".equals");
const clear = document.querySelector(".delete");
const positiveNegative = document.querySelector(".postiveNegative");
const display = document.querySelector(".display");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML += button.innerHTML;
  });
});

clear.addEventListener("click", () => {
  return (display.innerHTML = "");
});
