import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menu-item-container">
      <div className="menu-item-left">
        <div className="menu-item-title">{props.item.name}</div>
        <div className="menu-item-description">{props.item.description}</div>
        <div className="menu-item-price">{props.item.price}</div>
      </div>
      <div className="menu-item-right">
        <div className="menu-item-amount-container">
          <div className="menu-item-amount">Amount </div>
          <input className="menu-item-input" />
        </div>

        <button>+ Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
