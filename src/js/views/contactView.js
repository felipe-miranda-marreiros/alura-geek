class Contact {
  contactForm() {
    const form = document.querySelector(".footer__form");
    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");
    const formNome = document.querySelector(".footer__form-item");
    const formMensagem = document.querySelector(".footer__form-message");
    const popup = document.querySelector(".popup-success");
    const overlay = document.querySelector(".overlay");

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

      if (nome.value && mensagem.value) {
        nome.value = "";
        mensagem.value = "";
        popup.classList.remove("popup-success--hidden");
        overlay.classList.remove("popup-success--hidden");
        setTimeout(() => {
          popup.classList.add("popup-success--hidden");
          overlay.classList.add("popup-success--hidden");
        }, 3000);
      }
    });
  }
}

export default new Contact();
