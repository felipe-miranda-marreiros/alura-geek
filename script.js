import Login from "./src/js/PagesViews/Login.js";
import Home from "./src/js/PagesViews/Home.js";
import Products from "./src/js/PagesViews/Products.js";

const getContent = async (fragmentId, callback) => {
  try {
    const pages = {
      login: Login(),
      home: await Home(),
      products: await Products(),
    };
    callback(pages[fragmentId]);
  } catch (errors) {
    console.log(errors);
  }
};

const loadContent = () => {
  const App = document.getElementById("app");
  let fragmentId = location.hash.substring(1);

  if (!location.hash) {
    location.hash = "#home";
  }

  getContent(fragmentId, function (content) {
    App.innerHTML = "";
    App.insertAdjacentHTML("afterbegin", content);
  });
};

["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, loadContent)
);
