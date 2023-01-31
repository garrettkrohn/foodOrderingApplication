import React, { useContext } from "react";
import "./Cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import cartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(cartContext);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="cart-widget-container" onClick={props.toggle}>
      <AiOutlineShoppingCart className="cart-icon" />
      <div className="label">Your Cart</div>
      <div className="cart-quantity">{numberOfCartItems}</div>
    </div>
  );
};

export default Cart;
