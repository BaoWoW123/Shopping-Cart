import React from "react";
import { useParams } from "react-router-dom";
import "../styles/product.css";

const Product = (props) => {
  const { id } = useParams();
  let current = props.props.currentProduct;
  let sizes;
  if (current.type == "shoes") {
    sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
    console.log("sizse");
  }
  const updateQuantity = () => {};
  return (
    <div className="productPage">
      <div className="productDisplay">
        <div className="productPageProduct">
          <div className="productPageHeader">{id}</div>
          <img className="productPageImg" src={current.img} />
          <div className="productPageInfo">
            {sizes ? (
              <>
                <div>Sizes</div>
                <ol>
                  {sizes.map((size, i) => {
                    return <li key={i}>{size}</li>;
                  })}
                </ol>
              </>
            ) : (
              <ul></ul>
            )}
            <div className="productPageCart">
              <div className="quantityRange">
                <input
                  type="number"
                  className="quantity"
                  step="1"
                  min="0"
                  max="10"
                ></input>
              </div>
              <button className="addProductBtn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
