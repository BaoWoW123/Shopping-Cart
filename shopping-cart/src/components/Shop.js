import "../styles/shop.css";
import React from "react";
import products from "../images/images";
const Shop = () => {
  const displayItem = (e) => {
    console.log(e.target.className);
  };
  return (
    <div className="shop">
      <div className="shopDisplay">
        <div className="shopHeader">
          <h2>Products</h2>
          {
            <input
              label="searchBar"
              className="searchBar"
              type="text"
              placeholder="Search for..."
            ></input>
          }
        </div>
        <div className="shopCategories">
          <h3>Categories</h3>
          <div className="shoes" onClick={displayItem}>
            Climbing Shoes
          </div>
          <div className="chalk" onClick={displayItem}>
            Chalk
          </div>
          <div className="pads" onClick={displayItem}>
            Boulder Pads
          </div>
          <div className="misc" onClick={displayItem}>
            Accessories
          </div>
        </div>
        <div className="products">
          {products.map((product, i) => {
            return (
              <div className="product" key={i}>
                <div className="productName">{product.name}</div>
                <img className="productImg" src={product.img} key={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
