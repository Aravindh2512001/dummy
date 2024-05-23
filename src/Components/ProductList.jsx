// ProductList.js

import React, { useEffect } from "react";
import { fetchData } from "../Redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { RiHeart3Line, RiShoppingCartFill } from "@remixicon/react";
import { addItem } from "../Redux/reducer";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(addItem(product));
    navigate("/card"); // Navigate to cart after adding to cart
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const truncatedTitle =
          product.title.length > 14
            ? product.title.substring(0, 20) + "..."
            : product.title;
        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{truncatedTitle}</h3>
              <p>{product.description}</p>
              <p className="price"> ${product.price}</p>
              <div className="pro-btns">
                <button
                  className="addtowish btn"
                  onClick={() => addToCart(product)}
                >
                  <RiHeart3Line className="icon-pro" />
                  Add Wishlist
                </button>
                <button
                  className="addtocart btn"
                  onClick={() => addToCart(product)}
                >
                  <RiShoppingCartFill className="icon-pro" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
