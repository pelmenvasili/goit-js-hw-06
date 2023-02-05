const formRef = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
};
formRef.addEventListener("submit", onFormSubmit);
