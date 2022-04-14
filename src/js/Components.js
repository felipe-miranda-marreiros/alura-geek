const productItemEl = (products, section) => {
  return `<div class="products-section__item item--${products.id}">
      <img
        src=${products.imageUrl}
        alt=${products.alt}
        class=${
          section === "allProducts"
            ? "all-products--img"
            : "products-section__item-img"
        }
      />
      <h3 class="products-section__item-title">${products.name}</h3>
      <p class="products-section__item-price">R$ ${Number(products.price)
        .toFixed(2)
        .replace(".", ",")}</p>
      <a href=${products.id} class="products-section__item-link">Ver produto</a>
    </div>`;
};

export default productItemEl;
