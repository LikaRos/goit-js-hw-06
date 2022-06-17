const array = [];
const divBox = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputNum = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let size = 0;
function createBoxes(amount) {
  for (let i = 0; i <= amount - 1; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = "30px";
    newDiv.style.height = "30px";
    size += 10;
    newDiv.style.width = `${30 + size}px`;
    newDiv.style.height = `${30 + size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    array.push(newDiv);
  }
  divBox.append(...array);
}
function destroyBoxes() {
  divBox.innerHTML = "";
}

btnCreate.addEventListener("click", numberEnter);

function numberEnter(event) {
  createBoxes(inputNum.value);

  console.log(divBox);
}

btnDestroy.addEventListener("click", divDelete);

function divDelete(event) {
  destroyBoxes();
}
