import Login from "./src/js/PagesViews/Login.js";
import Home from "./src/js/PagesViews/Home.js";
import Products from "./src/js/PagesViews/Products.js";
import Description from "./src/js/PagesViews/ProductDescription.js";
import model from "./src/js/Model.js";

const getContent = async (fragmentId, callback) => {
  const pages = {
    login: Login(),
    home: await Home(),
    products: Products(),
    description: await Description(),
  };
  callback(pages[fragmentId]);
};

const loadContent = () => {
  const App = document.getElementById("app");
  let fragmentId = location.hash.substring(1);

  if (!location.hash) {
    location.hash = "#home";
  }

  if (location.hash.includes("description")) {
    location.hash = "#description";
  }

  getContent(fragmentId, function (content) {
    App.innerHTML = "";
    App.insertAdjacentHTML("afterbegin", content);
  });
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, loadContent)
);

document.addEventListener("click", (event) => {
  if (event.target.className === "products-section__item-link") {
    const url = event.target.getAttribute("href");
    const id = url.match(/(\d+)/)[0];
    model.state.productsData.find((product) => {
      if (product.id == id) {
        model.state.productDescription = product;
      }
    });
  }
});
