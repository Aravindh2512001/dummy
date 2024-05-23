// ProductCard.js

import { RiArrowLeftLine, RiDeleteBinLine } from "@remixicon/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Redux/reducer";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const cartItems = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleBack = () => {
    navigate("/");
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <div className="" style={{ display: "flex", alignItems: "center" }}>
        <RiArrowLeftLine
          onClick={handleBack}
          style={{
            color: "#Fff",
            border: "1px solid #ecece6",
            borderRadius: "8px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        />
        <h2>Cart Items</h2>
      </div>
      <div>
        {cartItems.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{
              display: "flex",
              margin: "20px",
              background: "#1F2326",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
              overflow: "hidden",
              padding: "20px",
              width: "50%",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "10px",
              }}
            />
            <div
              className="text"
              style={{
                marginLeft: "10px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="">
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.3rem",
                    color: "#007bff",
                    fontWeight: "500",
                  }}
                >
                  ${item.price}
                </p>
              </div>
              <div className="">
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    background: "none",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <RiDeleteBinLine style={{ color: "red" }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <p>Subtotal: ${subtotal}</p>
      </div>
    </div>
  );
};

export default ProductCard;
