import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">ReactMeals</div>
      <CartWidget className="cart" />
    </div>
  );
};

export default Navbar;
