const inputRange = document.querySelector("#font-size-control");

const span = document.querySelector("#text");
inputRange.addEventListener("input", rangeHandler);
function rangeHandler(event) {
  span.style.fontSize = inputRange.value + "px";
}

// const inputRange = document.querySelector("#font-size-control");

// const span = document.querySelector("#text");
// inputRange.addEventListener("input", rangeHandler);
// function rangeHandler(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// }
