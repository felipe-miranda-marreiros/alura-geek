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
  deleteProduct(deleteCurrentProduct) {
    window.addEventListener("click", (event) => {
      if (event.target.className.includes("admin-menu__delete")) {
        const id = event.target.getAttribute("data-id");
        if (confirm("Deseja realmente excluir o produto?")) {
          deleteCurrentProduct(id);
          window.location.reload();
        }
      }
    });
  }
  editProduct(editCurrentProduct) {
    window.addEventListener("click", (event) => {
      if (event.target.className.includes("admin-menu__edit")) {
        const id = event.target.getAttribute("data-id");
        editCurrentProduct(id);
        setTimeout(() => {
          window.location.hash = "#addproduct";
        }, 500);
      }
    });
  }
}

export default new Admin();
