const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputChange);
function inputChange(event) {
  if (event.currentTarget.value) {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}

/*2-й вариант */

// const nameInput = document.querySelector("#name-input");

// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", inputChange);
// function inputChange(event) {
//   if (nameInput.value) {
//     nameOutput.textContent = nameInput.value;
//   } else {
//     nameOutput.textContent = "Anonymous";
//   }
// }
