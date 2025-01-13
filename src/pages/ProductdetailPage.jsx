import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addToCart, getProductDetails } from "../adapters/productCalls";
import { toast } from "react-toastify";

const ProductdetailPage = ({ userToken }) => {
  const param = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userToken) {
      try {
        getProductDetails(param.id).then((product) => {
          setProductDetails(product);
        });
      } catch (error) {
        setError(error.message);
      }
    }
  }, [userToken]);

  useEffect(() => {
    if (productDetails.quantity) {
      setQuantity(productDetails.quantity);
    }
  }, [productDetails]);

  const addToCartHandler = async () => {
    try {
      await addToCart(productDetails.id, quantity);
      toast.success("Item added to cart successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="product-detail">
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <img src={productDetails.imageUrl} alt={productDetails.name} />
          <div className="info">
            <h1 className="title">{productDetails.name}</h1>
            <p className="description">{productDetails.description}</p>
            <p className="price">
              Price: {productDetails.price} Item in cart{" "}
              {productDetails.quantity}
            </p>
            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((prevQuantity) =>
                    prevQuantity > 1 ? prevQuantity - 1 : 1
                  )
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
              <button className="add-to-cart" onClick={addToCartHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductdetailPage;
