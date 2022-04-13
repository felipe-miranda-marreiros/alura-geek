import productItemEl from "../Components.js";
import model from "../model.js";

const Home = async () => {
  const starWars = await model.filteredSections("Star Wars");
  const consoles = await model.filteredSections("Consoles");
  const diversos = await model.filteredSections("Diversos");

  try {
    const html = `
    <header class="hero">
    <div class="hero__content container">
        <h1 class="hero__content-title">Dezembro Promocional</h1>
        <p class="hero__content-paragraph">
          Produtos selecionados com 33% de desconto
        </p>
        <a class="hero__content-btn btn" href="#consoles">Ver Consoles</a>
      </div>
    </header>
      <div class="container">
        <section>
          <div class="products-section__main-info">
            <h2 class="products-section__title">Star Wars</h2>
            <a href="#products" class="products-section__item-link">Ver tudo &xrarr;</a>
        </div>
            <section class="products-section__container">
              ${starWars.map((product) => productItemEl(product)).join("")}
            </section>
          </section>
          <section>
          <div class="products-section__main-info">
            <h2 class="products-section__title">Star Wars</h2>
            <a href="#products" class="products-section__item-link">Ver tudo &xrarr;</a>
        </div>
            <section class="products-section__container">
            ${consoles.map((product) => productItemEl(product)).join("")}
            </section>
          </section>
          <section>
          <div class="products-section__main-info">
            <h2 class="products-section__title">Star Wars</h2>
            <a href="#products" class="products-section__item-link">Ver tudo &xrarr;</a>
        </div>
            <section class="products-section__container">
            ${diversos.map((product) => productItemEl(product)).join("")}
            </section>
          </section>
        </div>
        `;
    return html;
  } catch (error) {
    console.log(error);
  }
};
export default Home;
