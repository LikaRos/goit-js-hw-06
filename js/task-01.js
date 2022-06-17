const list = document.querySelectorAll(".item");
console.log(list);

// const list = document.querySelector("#categories").children;

// console.log(list);

console.log(`Number of categories: ${list.length}`);

list.forEach((li) => {
  const title = li.querySelector("h2");
  console.log(`Category:  ${title.innerHTML}`);
  const smallList = li.querySelectorAll("li");
  console.log(`Elements: ${smallList.length}`);
});
