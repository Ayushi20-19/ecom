import adapter from "../utils/interceptor";

const getProducts = async () => {
  const res = await adapter.get("/products");
  return res.data;
};

const getProductDetails = async (id) => {
  const res = await adapter.get(`/products/${id}`);
  return res.data;
};

const addToCart = async (productId, quantity) => {
  const res = await adapter.post("/cart", {
    productId,
    quantity,
  });
  return res.data;
};

export { getProducts, getProductDetails, addToCart };
