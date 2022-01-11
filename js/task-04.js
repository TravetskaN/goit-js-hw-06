// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);
const value = document.querySelector("#value");

let counterValue = 0;

function decrement() {
  value.textContent = counterValue -= 1;
}

function increment() {
  value.textContent = counterValue += 1;
}

incrementBtnRef.addEventListener("click", increment);
decrementBtnRef.addEventListener("click", decrement);
