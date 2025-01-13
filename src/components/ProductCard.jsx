import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const getToDetailsPage = (id) => {
    navigate(`/productPage/${id}`);
  };
  const productId = product.id || product.productId;
  return (
    <div className="product-card" onClick={() => getToDetailsPage(productId)}>
      <img src={product.imageUrl} />
      <p>{product.name}</p>
      <span>${product.price}</span>
      {product.cartQuantity && <span>Quantity: {product.cartQuantity}</span>}
    </div>
  );
};

export default ProductCard;
