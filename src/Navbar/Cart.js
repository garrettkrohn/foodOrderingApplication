import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="icon"></div>
      <div className="label">Your Cart</div>
      <div className="cart-quantity">2</div>
    </div>
  );
};

export default Cart;
