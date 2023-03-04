import "./styles/app.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import products from "./components/images";

const App = () => {
  let [items, setItems] = useState(products);
  let [currentProduct, setCurrentProduct] = useState();
  let [cart, setCart] = useState([]);

  const sortItems = (e) => {
    let tempArr;
    e.target.className === "showAll"
      ? (tempArr = products)
      : (tempArr = products.filter(
          (product) => product.type === e.target.className
        ));
    setItems((items = tempArr));
  };

  const selectProduct = (e) => {
    setCurrentProduct((currentProduct = e));
    return currentProduct;
  };

  const addToCart = async (item) => {
    //async for state update before test
    await setCart((prevState) => (cart = [...prevState, item]));
  };

  return (
    <div className="app">
      <Header />
      <Main
        props={(e) => sortItems}
        items={items}
        selectProduct={selectProduct}
        currentProduct={currentProduct}
        addToCart={addToCart}
        cart={cart}
      />
      <Footer />
    </div>
  );
};

export default App;
