import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const menuItems = [
    {
      name: "Sushi",
      description: "gross uncooked fish",
      price: "$22.99",
    },
    {
      name: "Burger",
      description: "Yummy beef burger",
      price: "$15.99",
    },
    {
      name: "Lobster",
      description: "gross creature from the ocean",
      price: "$32.99",
    },
    {
      name: "Steak",
      description: "Delicious prime steak",
      price: "$52.99",
    },
    {
      name: "Fries",
      description: "Who doesn't love fries?",
      price: "$2.99",
    },
  ];

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
            <div>$33.00</div>
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
