import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getCartItems } from "../adapters/cartCalls";

const CartPages = ({ userToken }) => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const items = await getCartItems();
      setCartItems(items);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    if (userToken) fetchCartItems();
  }, [userToken]);

  return (
    <div className="cart-page">
      {cartItems.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartPages;
