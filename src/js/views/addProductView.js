import drop from "../../img/drop.png";

class AddProduct {
  #App = document.getElementById("app");

  render() {
    this.#App.innerHTML = "";
    this.#App.insertAdjacentHTML("afterbegin", this.#generateMarkup());
  }

  getImageFromDrag(handler) {
    const dragForm = document.querySelector(".form-drag");
    const dragStatus = document.getElementById("form-drag--status");

    dragForm.addEventListener("dragover", (event) => {
      event.preventDefault();
      dragForm.classList.add("form-drag--active");
    });

    dragForm.addEventListener("dragleave", () => {
      dragForm.classList.remove("form-drag--active");
    });

    dragForm.addEventListener("drop", (event) => {
      event.preventDefault();
      const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
      if (validExtensions.includes(event.dataTransfer.files[0].type)) {
        dragStatus.innerText = event.dataTransfer.files[0].name;

        let fileRender = new FileReader();
        fileRender.onload = () => {
          let fileURL = fileRender.result;
          handler(fileURL);
        };

        fileRender.readAsDataURL(event.dataTransfer.files[0]);

        dragForm.classList.remove("form-drag--invalid");
      } else {
        dragStatus.innerText =
          "Não é um arquivo de imagem válido. Insira um arquivo JPEG, PNG ou JPG.";
        dragForm.classList.remove("form-drag--active");
        dragForm.classList.add("form-drag--invalid");
      }
    });
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
            <img src=${drop} alt="Drop" class="drop" />
            <p id="form-drag--status">Arraste para adicionar uma imagem para o produto</p>
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
              class="description input-item"
            ></textarea>
          </li>
        </ul>
        <button class="form__add--btn btn">Adicionar produto</button>
      </div>
    </form>`;
  }
}

export default new AddProduct();
