const listProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/products/");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

const filteredSections = async (section) => {
  try {
    const response = await fetch("http://localhost:3000/products/");
    const products = await response.json();
    const filter = products.filter((product) =>
      product.section === `${section}` ? product.section : undefined
    );
    return filter;
  } catch (error) {
    console.error(error);
  }
};

const model = {
  listProducts,
  filteredSections,
};

export default model;
