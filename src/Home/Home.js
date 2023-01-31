import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image"></div>
      <div className="home-text">
        <div className="home-title">Delicious Food, Delivered To You</div>
        <div className="home-description">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </div>
        <div className="home-description">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </div>
      </div>
    </div>
  );
};

export default Home;
