function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bcgColorRef = document.querySelector(".color");
const body = document.body;
const changeBcgColor = () => {
  bcgColorRef.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};
changeColorBtn.addEventListener("click", changeBcgColor);
