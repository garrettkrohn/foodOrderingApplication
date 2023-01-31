import React from "react";
import "./Cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart-container">
      <AiOutlineShoppingCart className="cart-icon" />
      <div className="label">Your Cart</div>
      <div className="cart-quantity">2</div>
    </div>
  );
};

export default Cart;
