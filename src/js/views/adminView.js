class Admin {
  #status;
  #btnLogin = document.querySelector(".navbar__btn-login");
  render(data) {
    this.#status = data;
    this.#addHandlerRender();
  }
  #addHandlerRender() {
    if (this.#status) {
      this.#btnLogin.innerText = "Menu administrador";
      this.#btnLogin.setAttribute("href", "#addproduct");
    }
  }
}

export default new Admin();
