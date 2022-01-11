// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
const inputRef = document.querySelector("#validation-input");
const validationInput = inputRef.dataset.length;

function borderPainter(event) {
  return event.target.value.length == validationInput
    ? inputRef.setAttribute("class", "valid")
    : inputRef.setAttribute("class", "invalid");
}

inputRef.addEventListener("blur", borderPainter);
