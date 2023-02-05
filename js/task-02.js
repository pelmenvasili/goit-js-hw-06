const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const nameEl = [];
const ulRef = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const ingredientsRef = document.createElement("li");
  ingredientsRef.classList.add("item");
  ingredientsRef.textContent = ingredient;
  nameEl.push(ingredientsRef);
  ulRef.append(ingredientsRef);
});
