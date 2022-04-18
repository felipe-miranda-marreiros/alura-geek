class AddProduct {
  #App = document.getElementById("app");

  render() {
    this.#App.innerHTML = "";
    this.#App.insertAdjacentHTML("afterbegin", this.#generateMarkup());
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, () => {
        if (
          window.location.hash.includes("#addproduct") &&
          window.localStorage.getItem("admin")
        ) {
          handler();
        }
      })
    );
  }

  #generateMarkup() {
    return `<form action="#" class="form-add-product">
      <div class="form-add-product__container container">
        <h2 class="form-add-product__title">Adicionar novo produto</h2>
        <ul class="form__inputs">
          <li class="form-drag">
            <img src="./src/img/insert-photo.png" alt="" />
          </li>
          <li class="form__local-upload">
            <label
              for="imagem"
              class="upload-label"
              title="Clique para selecionar imagem..."
              >Procure no seu computador</label
            >
            <input type="file" name="imagem" id="imagem" accept="image/*" />
          </li>
          <li class="form-name">
            <input type="text" placeholder="Nome do produto" class="name" />
          </li>
          <li class="form-price">
            <input placeholder="Preço do produto" class="price" />
          </li>
          <li class="form-description">
            <textarea
              placeholder="Descrição do produto"
              class="description"
            ></textarea>
          </li>
        </ul>
        <button class="form__add--btn btn">Adicionar produto</button>
      </div>
    </form>`;
  }
}

export default new AddProduct();
