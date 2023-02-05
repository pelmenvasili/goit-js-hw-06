function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesRef = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputNumberEl = document.querySelector('[type="number"]');
boxesRef.style.display = "flex";
boxesRef.style.flexWrap = "wrap";
boxesRef.style.alignItems = "center";
boxesRef.style.gap = "10px";

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return boxesRef.append(...elementsToAdd);
};

const destroyBoxes = () => {
  boxesRef.textContent = "";
};

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputNumberEl.value));
});

const toogleValue = (event) => {
  const inputValue = event.currentTarget.value;
};
inputNumberEl.addEventListener("input", toogleValue);

destroyBtn.addEventListener("click", destroyBoxes);
