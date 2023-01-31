import React, { useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = [
    {
      name: "Sushi",
      description: "gross uncooked fish",
      price: 22.99,
    },
    {
      name: "Burger",
      description: "Yummy beef burger",
      price: 15.99,
    },
    {
      name: "Lobster",
      description: "gross creature from the ocean",
      price: 32.99,
    },
    {
      name: "Steak",
      description: "Delicious prime steak",
      price: 52.99,
    },
    {
      name: "Fries",
      description: "Who doesn't love fries?",
      price: 2.99,
    },
  ];

  return (
    <div className="menu-container">
      <div>
        {menuItems.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
