// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const controlsDiv = document.getElementById("controls");
// console.log(controlsDiv);
controlsDiv.addEventListener("change", (e) => {
  // console.log("target", e.target.value);
  const amount = e.target.value;
  const elements = [];
  const element = "<div></div>";

  for (let i = 0; i < amount; i += 1) {
    elements.push(element);
  }

  controlsDiv.insertAdjacentHTML("afterend", elements.join(" "));
});
