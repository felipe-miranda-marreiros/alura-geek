import * as model from "./model.js";
import productView from "./views/productView.js";
import productDescriptionView from "./views/productDescriptionView.js";
import allProductsView from "./views/allProductsView.js";
import loginView from "./views/loginView.js";
import addProductView from "./views/addProductView.js";
import adminView from "./views/adminView.js";

const controlProductDescription = async () => {
  try {
    let id = window.location.hash.substring(1);
    await model.productDescription(id);
    const starWars = await model.filteredSections("Star Wars");
    productDescriptionView.render(starWars, model.state.productItem);
  } catch (error) {
    console.log(error);
  }
};

const controlProducts = async () => {
  try {
    const starWars = await model.filteredSections("Star Wars");
    const consoles = await model.filteredSections("Consoles");
    const diversos = await model.filteredSections("Diversos");
    const sections = [starWars, consoles, diversos];
    productView.render(sections);
  } catch (error) {
    console.log(error);
  }
};

const controlAllProducts = async () => {
  await model.loadProducts();
  allProductsView.render(
    model.state.products,
    window.localStorage.getItem("admin")
  );
  const btnAddProduct = document.querySelector(".products-section__btn--add");
  if (window.localStorage.getItem("admin"))
    btnAddProduct.classList.remove("hidden");
};

const controlLogin = async () => {
  loginView.render(window.localStorage.getItem("admin"));
  await model.loadLoginData();
  const formLogin = document.querySelector(".form__login");
  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const [mail, password] = event.target;
    if (
      mail.value === model.state.userData[0].email &&
      Number(password.value) === model.state.userData[0].password &&
      mail.value.includes("admin")
    ) {
      model.state.userAdminStatus = true;
      window.localStorage.setItem("admin", model.state.userAdminStatus);
      window.location.hash = "#addproducts";
      window.location.reload();
      mail.value = "";
      password.value = "";
      blur();
    } else {
      console.log("é mentira");
    }
  });
};

const controlAddProduct = async () => {
  addProductView.render(window.localStorage.getItem("admin"));
  addProductView.getImage();
  addProductView.sendFormData(model.createNewProduct);
};

const controlAdminAccess = () => {
  adminView.render(window.localStorage.getItem("admin"));
};
const controlProductOptions = () => {
  window.addEventListener("click", async (event) => {
    if (event.target.className.includes("admin-btn")) {
      let id = event.target.getAttribute("data-id");
      const option = confirm("Deseja realmente excluir o produto?");
      if (option) {
        await model.deleteProduct(id);
        window.location.reload();
      }
    }
  });
};

const productControllers = {
  controlProducts,
  controlProductDescription,
};

const init = () => {
  productView.addHandlerRender(productControllers);
  allProductsView.addHandlerRender(controlAllProducts);
  loginView.addHandlerRender(controlLogin);
  addProductView.addHandlerRender(controlAddProduct);
  controlAdminAccess();
  controlProductOptions();
};

init();
