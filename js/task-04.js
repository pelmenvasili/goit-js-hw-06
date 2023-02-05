const incrementBtn = document.querySelector('[data-action="increment"');
const decrementBtn = document.querySelector('[data-action="decrement"');
let counterValue = 0;
const valueEl = document.querySelector("#value");

const onClickDecrementBtn = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onClickIncrementBtn = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
