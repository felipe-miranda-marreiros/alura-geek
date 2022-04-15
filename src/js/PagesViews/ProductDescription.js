import model from "../Model.js";
import components from "../Components.js";

const Description = async () => {
  const starWars = await model.filteredSections("Star Wars");

  const html = ` <section class="product">
          <div class="product__container container">
              ${components.productDescription(model.state.productDescription)}
            </div>
          </div>
          <div class="container">
            <section>
              <div class="products-section__main-info">
                <h2 class="products-section__title">Produtos similares</h2>
                <a href="#" class="products-section__item-link">Ver tudo &xrarr;</a>
              </div>
              <section class="products-section__container">
              ${starWars
                .map((product) => components.productItemEl(product))
                .join("")}
              </section>
            </section>
        </section> `;
  return html;
};

export default Description;
