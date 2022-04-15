const state = {
  productsData: {},
  productDescription: {},
};

(async () => {
  const response = await fetch("http://localhost:3000/products/");
  const products = await response.json();
  state.productsData = products;
})();

const filteredSections = async (section) => {
  const response = await fetch("http://localhost:3000/products/");
  const products = await response.json();
  const filter = products.filter((product) =>
    product.section === `${section}` ? product.section : undefined
  );
  return filter;
};

const productDescription = async (id) => {
  if (!id) return;
  let newId = Number(id);
  const response = await fetch(`http://localhost:3000/products/${newId}`);
  const data = await response.json();
  return data;
};

const model = {
  filteredSections,
  productDescription,
  state,
};

export default model;
