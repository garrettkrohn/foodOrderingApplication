import React, { useContext } from "react";
import cartContext from "../store/cart-context";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const menuItems = ctx.items;
  const totalRounded = Math.round(ctx.totalAmount * 100) / 100;

  const orderProcessing = () => {
    console.log("ordering now...");
  };

  return (
    <>
      <div className="background"></div>
      <div className="cart-container">
        {menuItems.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
        <div className="cart-total-container">
          <div className="cart-total-container-top">
            <div>Total Amount</div>
            <div>${totalRounded}</div>
          </div>
          <div className="cart-total-container-bottom">
            <button onClick={props.toggle}>Close</button>
            <button onClick={orderProcessing}>Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
