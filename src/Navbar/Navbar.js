import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">ReactMeals</div>
      <CartWidget toggle={props.toggle} className="cart" />
    </div>
  );
};

export default Navbar;
