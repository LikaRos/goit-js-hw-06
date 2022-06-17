const a = document.querySelector("#validation-input");

a.addEventListener("blur", handler);

function handler(event) {
  if (event.target.value.length == a.dataset.length) {
    a.classList.add("valid");
    a.classList.remove(".invalid");
  } else {
    a.classList.add("invalid");
    a.classList.remove(".valid");
  }
  console.log(event.target.value.length);
  console.log(a.dataset.length);
}
