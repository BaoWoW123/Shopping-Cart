import "../styles/home.css";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <h1>Everything you need to climb</h1>
      </div>
      <Link to="/shop" className="homeShopLink">
        <h2>Shop</h2>
      </Link>
    </div>
  );
};

export default Home;
