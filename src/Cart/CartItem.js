import React, { useContext } from "react";
import cartContext from "../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const ctx = useContext(cartContext);

  const increment = () => {
    const repsonseObject = {
      name: props.item.name,
      quantity: 1,
      price: props.item.price,
    };
    ctx.addItem(repsonseObject);
  };

  const decrement = () => {
    const responseObject = {
      name: props.item.name,
      price: props.item.price,
    };
    ctx.removeItem(responseObject);
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-container-left">
        <div className="cart-item-container-left-top">
          <div className="cart-item-name">{props.item.name}</div>
        </div>
        <div className="cart-item-container-left-bottom">
          <div className="cart-item-price">{props.item.price}</div>
          <div className="cart-item-quantity">x{props.item.quantity}</div>
        </div>
      </div>
      <div className="cart-item-container-right">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
