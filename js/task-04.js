const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const counterDecrement = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};

const counterIncrement = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};

buttonIncr.addEventListener("click", counterIncrement);
buttonDecr.addEventListener("click", counterDecrement);
