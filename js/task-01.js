const categoriesRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesRef.length);
const nameEl = categoriesRef.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`
  )
);
