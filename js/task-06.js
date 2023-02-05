const inputRef = document.querySelector("#validation-input");
const onInputBlur = (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};
inputRef.addEventListener("blur", onInputBlur);
