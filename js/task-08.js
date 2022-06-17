const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log(ElementInternals);

  console.log(event.currentTarget);
  if (email.value === "" || password.value === "") {
    alert("Please, fill in all fields");
  } else {
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
}
