import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigator = useNavigate();

  const API = `https://dummyjson.com/products/${id}`;

  const fetchApi = async () => {
    try {
      const response = await fetch(API);
      const result = await response.json();
      setApiData(result);
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

  const handleOnHomePage = () => {
    navigator("/products");
  };

  return (
    <div className="container">
      <div className="row m-4">
        <div className="col-md-10 offset-md-1">
          <div className="card">
            <div className="card-title">
              <h1 className="text-center">{apiData.title}</h1>
            </div>
            <div className="card-body">
              <h5>{apiData.description}</h5>
              <div className="row">
                <div className="col-8">
                  <img
                    src={apiData.images}
                    alt={apiData.tilte}
                    style={{ width: "500px", height: "400px" }}
                  />
                </div>
                <div className="col-4">
                  <h6>
                    Warranty:-
                    <span style={{ color: "red" }}>
                      {apiData.warrantyInformation}
                    </span>
                  </h6>
                  <h6>
                    Shipping:-
                    <span style={{ color: "red" }}>
                      {apiData.shippingInformation}
                    </span>
                  </h6>
                  <h6>
                    Availability:-
                    <span style={{ color: "red" }}>
                      {apiData.availabilityStatus}
                    </span>
                  </h6>
                </div>
                <button className="btn btn-info" onClick={handleOnHomePage}>
                  Go to home Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
