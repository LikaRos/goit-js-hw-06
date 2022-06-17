const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputChange);
function inputChange(event) {
  if (nameInput.value) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
