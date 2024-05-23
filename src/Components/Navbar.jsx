import React from "react";
import avatar from "../Assets/Images/9439678.jpg";
import { RiHeartLine, RiShoppingCart2Line } from "@remixicon/react";
import "./Navbar.css";
import logo from "../Assets/Images/shop.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.product.cart);

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt=""
          style={{ width: "4rem", borderRadius: "12px" }}
        />
      </div>
      <div className="icons">
        <button className="btns-nav">
          <RiHeartLine className="icon" />
          <span>2</span>
        </button>
        <button className="btns-nav" onClick={() => navigate("/cart")}>
          <RiShoppingCart2Line className="icon" />
          <span>{cartItems.length}</span>
        </button>
        <img src={avatar} alt="Profile" className="profile-image" />
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
