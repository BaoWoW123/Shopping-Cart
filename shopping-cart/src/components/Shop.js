import "../styles/shop.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = (props) => {
  let sortItems = props.props.props;
  let products = props.props.items;
  const navigate = useNavigate();
  const selectProduct = (e) => {
    props.props.selectProduct(e);
    navigate(`/shop/` + e.name);
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
          <div className="showAll" onClick={sortItems("all")}>
            Show All
          </div>
          <div className="shoes" onClick={sortItems("shoes")}>
            Climbing Shoes
          </div>
          <div className="chalk" onClick={sortItems("chalk")}>
            Chalk
          </div>
          <div className="pads" onClick={sortItems("pads")}>
            Boulder Pads
          </div>
          <div className="misc" onClick={sortItems("misc")}>
            Accessories
          </div>
        </div>
        <div className="products">
          {products.map((product, i) => {
            return (
              <div className="product" key={i}>
                <div className="productName">{product.name}</div>
                <div className="productPrice"> {product.price}</div>
                <img
                  className="productImg"
                  src={product.img}
                  key={i}
                  onClick={() => selectProduct(product)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
