export const state = {
  products: {},
  productItem: {},
  productSection: {},
  userData: {},
  userAdminStatus: false,
};

export const loadProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    state.products = data;
  } catch (error) {
    console.log(error);
  }
};

export const filteredSections = async (section) => {
  const response = await fetch("http://localhost:3000/products/");
  const data = await response.json();
  const filter = data.filter((product) =>
    product.section === `${section}` ? product.section : undefined
  );
  return filter;
};

export const productDescription = async (id) => {
  if (!id) return;
  let productId = Number(id);
  const response = await fetch(`http://localhost:3000/products/${productId}`);
  const data = await response.json();
  state.productItem = data;
};

export const loadLoginData = async () => {
  const response = await fetch(`http://localhost:3000/users/`);
  const data = await response.json();
  state.userData = data;
};

export const deleteProduct = async (id) => {
  if (!id) return;
  let productId = Number(id);
  return await fetch(`http://localhost:3000/products/${productId}`, {
    method: "DELETE",
  });
};

export const createNewProduct = async (productInfo) => {
  return await fetch(`http://localhost:3000/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: productInfo.productName,
      imageUrl: productInfo.productImage,
      price: productInfo.productPrice,
      alt: "Product",
    }),
  });
};
