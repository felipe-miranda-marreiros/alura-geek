class Contact {
  contactForm() {
    const form = document.querySelector(".footer__form");
    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");
    const formNome = document.querySelector(".footer__form-item");
    const formMensagem = document.querySelector(".footer__form-message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!nome.value) {
        formNome.classList.add("invalid-input-name");
      } else {
        formNome.classList.remove("invalid-input-name");
      }

      if (!mensagem.value) {
        formMensagem.classList.add("invalid-input-message");
      } else {
        formMensagem.classList.remove("invalid-input-message");
      }
    });
  }
}

export default new Contact();
