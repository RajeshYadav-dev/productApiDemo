import React from "react";
import { useState, useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import style from "../components/Product.module.css";
import { Typography } from "@mui/material";

const Product = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://dummyjson.com/products";

  const fetchApi = async () => {
    try {
      const response = await fetch(API);
      const result = await response.json();
      console.log(result.products);
      setApiData(result.products);
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  return (
    <div className="container">
      <div className="row">
        {apiData && apiData.length > 0
          ? apiData.map((item) => <ProductDetail pkey={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default Product;
