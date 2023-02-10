const show = () => {
  const input = document.querySelector("#password");
  const word = document.querySelector(".show");

  if (input.type === "password") {
    input.type = "text";
    word.style.color = "red";
    word.textContent = "Ocultar";
  } else {
    input.type = "password";
    word.style.color = "black";
    word.textContent = "Mostrar";
  }
};

export default show;
