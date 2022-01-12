// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonChangeColorEl = document.querySelector(".change-color");
const bgColor = document.querySelector(".color");

buttonChangeColorEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bgColor.textContent = bodyEl.style.backgroundColor;
});
