const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
btn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
}
