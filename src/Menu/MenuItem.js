import React, { useContext, useState } from "react";
import cartContext from "../store/cart-context";
import "./MenuItem.css";

const MenuItem = (props) => {
  const ctx = useContext(cartContext);
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = () => {
    const repsonseObject = {
      name: props.item.name,
      quantity: parseInt(amount),
      price: props.item.price,
    };
    ctx.addItem(repsonseObject);
  };

  return (
    <div className="menu-item-container">
      <div className="menu-item-left">
        <div className="menu-item-title">{props.item.name}</div>
        <div className="menu-item-description">{props.item.description}</div>
        <div className="menu-item-price">${props.item.price}</div>
      </div>
      <div className="menu-item-right">
        <div className="menu-item-amount-container">
          <div className="menu-item-amount">Amount</div>
          <input
            className="menu-item-input"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
