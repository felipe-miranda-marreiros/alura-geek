import components from "../Components.js";
import model from "../Model.js";

const Products = () => {
  const html = `
    <section class="product-section__all">
          <div class="products-section__main-info--all mg-clear-top container">
            <h2 class="products-section__title">Todos os produtos</h2>
            <a
              href="#"
              class="products-section__item-link products-section__btn--add btn"
              >Adicionar produto</a
            >
          </div>
        <div class="product-section__all--container container">
          <section class="product-section__all--container mg-clear-bottom">
            ${model.state.productsData
              .map((product) =>
                components.productItemEl(product, "allProducts")
              )
              .join("")}
          </section>
        </div>
      </section>
    `;
  return html;
};

export default Products;
