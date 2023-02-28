import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.png";
import search from "../images/search.png";
const Header = () => {
  const showCart = () => {
    const cart = document.querySelector(".cart");
    if (cart.className === "cart") {
      cart.classList.add("visuallyHidden");
      setTimeout(() => {
        cart.classList.add("hidden");
      }, 120);
    } else {
      cart.classList.remove("hidden");
      setTimeout(() => {
        cart.classList.remove("visuallyHidden");
      }, 50);
    }
  };

  return (
    <div className="header">
      <h2> Boulder Shop</h2>
      <Link to="/" className="homeLink">
        <h2>Home</h2>
      </Link>
      <Link to="/shop" className="shopLink">
        <h2>Shop</h2>
      </Link>

      <button className="cartBtn" onClick={showCart}>
        <img src={cart} alt="cart image" />
      </button>
    </div>
  );
};
export default Header;
