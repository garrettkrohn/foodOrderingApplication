import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-container-left">
        <div className="cart-item-name">{props.item.name}</div>
        <div className="cart-item-price">{props.item.price}</div>
      </div>
      <div className="cart-item-container-right">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
