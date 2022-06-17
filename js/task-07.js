const a = document.querySelector("#font-size-control");

const span = document.querySelector("#text");
a.addEventListener("input", rangeHandler);
function rangeHandler(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
