import "./styles/app.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import products from "./images/images";
import Shop from "./components/Shop";

const App = () => {
  let [items, setItems] = useState(products);
  let [currentProduct, setCurrentProduct] = useState();

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

  useEffect(() => {
    console.log("effect");
  }, []);
  return (
    <div className="app">
      <Header />
      <Main
        props={(e) => sortItems}
        items={items}
        selectProduct={selectProduct}
        currentProduct={currentProduct}
      />
      <Footer />
    </div>
  );
};

export default App;
