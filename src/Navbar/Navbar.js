import React from "react";
import Cart from "./Cart";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">ReactMeals</div>
      <Cart className="cart" />
    </div>
  );
};

export default Navbar;
