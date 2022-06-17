const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
console.log(ul);
const newArray = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const list = document.createElement("li");
  list.textContent = ingredients[i];
  newArray.push(list);
  list.classList.add("item");
  console.log(newArray);
}
ul.append(...newArray);
console.log(ul);
