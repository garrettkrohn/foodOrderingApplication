import React, { useContext } from "react";
import cartContext from "../store/cart-context";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const menuItems = ctx.items;
  return (
    <>
      <div className="background"></div>
      <div className="cart-container">
        {menuItems.map((item) => (
          <CartItem item={item} />
        ))}
        <div className="cart-total-container">
          <div className="cart-total-container-top">
            <div>Total Amount</div>
            <div>{ctx.totalAmount}</div>
          </div>
          <div className="cart-total-container-bottom">
            <button onClick={props.toggle}>Close</button>
            <button>Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
