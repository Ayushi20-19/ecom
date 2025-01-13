import adapter from "../utils/interceptor";

const getCartItems = async () => {
  const res = await adapter.get("/cart");
  return res.data.items;
};

export { getCartItems };
