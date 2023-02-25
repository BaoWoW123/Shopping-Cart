import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const showCart = () => {
    const cart = document.querySelector(".cart");
    return cart.className === "cart"
      ? (cart.className = "cart active")
      : (cart.className = "cart");
  };

  return (
    <div className="header">
      <div> Something Here</div>
      <Link to="/" className="homeLink"><h2>Home</h2></Link>
      <Link to="/shop" className="shopLink"><h2>Shop</h2></Link>
      <input label="searchBar" type="text" placeholder="Search for..."></input>
      <button className="cartBtn" onClick={showCart}>
        {" "}
        Cart
      </button>
    </div>
  );
};

export default Header;
