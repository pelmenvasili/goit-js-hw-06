function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bcgColorRef = document.querySelector(".color");
const body = document.body;
const color = getRandomHexColor();
const changeBcgColor = () => {
  bcgColorRef.textContent = color;
  body.style.backgroundColor = color;
};
changeColorBtn.addEventListener("click", changeBcgColor);
