const pergunta = document.querySelectorAll(".info");

pergunta.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("ativo");
  });
});
