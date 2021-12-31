const form = document.querySelector(".form");
const buttonMailTo = document.querySelector(".mail");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formulario = new FormData(this);
  buttonMailTo.setAttribute(
    "href",
    `mailto:maxischnipp2@gmail.com?subject=${formulario.get(
      "asunto"
    )} . Mi Teléfono: ${formulario.get("tel")}&body=${formulario.get("message")}`
  );

  buttonMailTo.click();
}