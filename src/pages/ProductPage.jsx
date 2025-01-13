import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../adapters/productCalls";

const ProductPage = ({ userToken }) => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userToken) {
      try {
        getProducts(userToken).then((products) => {
          setProductList(products);
        });
      } catch (error) {
        setError(error.message);
      }
    }
  }, [userToken]);

  return (
    <>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <h1>All the products</h1>
          <div className="product-page">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
