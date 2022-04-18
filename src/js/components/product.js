export const productItemEl = (products, section) => {
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
        <a href="#${
          products.id
        }" class="products-section__item-link">Ver produto</a>
      </div>`;
};

export const productDescription = (product) => {
  if (!product) return;
  return `<div class="product__img full-width">
  <img src=${product.imageUrl} alt=${product.alt} />
</div>
<div class="product__content">
  <h2 class="product__title">${product.name}</h2>
  <h3 class="product__price">${Number(product.price)
    .toFixed(2)
    .replace(".", ",")}</h3>
  <p class="product__description">
    Voluptas voluptatum quibusdam similique, class debitis alias
    maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis,
    minima malesuada habitasse distinctio sequi aliqua malesuada.
    Quisque deleniti proin expedita, aliquid litora. Iste recusandae?
    Commodo, quia ridiculus doloribus vero dictum? Penatibus donec
    placeat faucibus, dolorum do. Animi porta anim magnam
  </p>
</div>`;
};
