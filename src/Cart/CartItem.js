import React, { useContext } from "react";
import cartContext from "../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const ctx = useContext(cartContext);

  return (
    <div className="cart-item-container">
      <div className="cart-item-container-left">
        <div className="cart-item-container-left-top">
          <div className="cart-item-name">{props.item.name}</div>
        </div>
        <div className="cart-item-container-left-bottom">
          <div className="cart-item-price">{props.item.price}</div>
          <div className="cart-item-quantity">x{props.item.amount}</div>
        </div>
      </div>
      <div className="cart-item-container-right">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
