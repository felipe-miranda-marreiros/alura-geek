import productItemEl from "../Components.js";
import model from "../model.js";

const Products = async () => {
  try {
    const products = await model.listProducts();
    const html = `
    <section class="product-section__all">
        <div class="container">
          <div class="products-section__main-info mg-clear-top">
            <h2 class="products-section__title">Todos os produtos</h2>
            <a
              href="#"
              class="products-section__item-link products-section__btn--add btn"
              >Adicionar produto</a
            >
          </div>
          <section class="product-section__all--container mg-clear-bottom">
            ${products.map((product) => productItemEl(product)).join("")}
          </section>
        </div>
      </section>
    `;
    return html;
  } catch (error) {
    console.error(error);
  }
};

export default Products;
