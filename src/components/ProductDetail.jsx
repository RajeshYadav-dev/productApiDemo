import React from "react";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ item, pkey }) => {
  const navigator = useNavigate();
  const handleOnShowDetail = (value) => {
    console.log(value);
    navigator(`${value}`);
  };
  return (
    <>
      <div className="col m-2">
        <div className="card" style={{ width: "400px", height: "420px" }}>
          <div className="card-body" key={pkey}>
            <img
              src={item.images}
              alt={item.tilte}
              style={{ width: "300px", height: "300px" }}
            />
            <h3>Price: {item.price}$</h3>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleOnShowDetail(item.id)}
              >
                show detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
