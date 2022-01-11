// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const makeItem = (ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  return itemRef;
};

const items = ingredients.map((ingredient) => makeItem(ingredient));
console.log(items);

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...items);

console.log(ingredientsRef);
