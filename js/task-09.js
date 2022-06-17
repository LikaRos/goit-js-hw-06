const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor(event) {
  event.preventDefault();
  document.body.style.backgroundColor = getRandomHexColor();
  console.log(event);
}
