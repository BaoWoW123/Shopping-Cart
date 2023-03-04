import React from "react";
import { useParams } from "react-router-dom";
import "../styles/product.css";

const Product = (props) => {
  const { id } = useParams();
  let current = structuredClone(props.props.currentProduct);
  let sizes;
  let currentSize;
  if (current === undefined) {
    //ERROR, loses state when restarting on product page
    return alert("Error! Go back to shop");
  } else if (current.type == "shoes") {
    sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
  }

  const storeSize = (e) => {
    currentSize = +e.target.textContent;
  };
  const addToCart = (e) => {
    let quantity = +e.target.parentNode.firstChild.value;
    if (quantity === 0 || (current.type === "shoes" && !currentSize))
      return (e.target.parentNode.firstChild.style.border = "2px solid red");
    else {
      e.target.parentNode.firstChild.style.border = "2px solid white"; // resets border in case of prior error
      current.amount = quantity;
      if (currentSize) {
        current.size = currentSize;
      }
      props.props.addToCart(current);
    }
  };
  return (
    <div className="productPage">
      <div className="productDisplay">
        <div className="productPageProduct">
          <h1 className="productPageHeader">{id}</h1>
          <img className="productPageImg" src={current.img} />
          <div className="productPageInfo">
            {sizes ? (
              <>
                <div>Sizes</div>
                <ol>
                  {sizes.map((size, i) => {
                    return (
                      <li onClick={storeSize} key={i}>
                        {size}
                      </li>
                    );
                  })}
                </ol>
              </>
            ) : (
              <ul></ul>
            )}
            <div className="productPageCart">
              <input
                type="number"
                className="quantity"
                step="1"
                min="0"
                max="10"
              ></input>
              <button className="addProductBtn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
