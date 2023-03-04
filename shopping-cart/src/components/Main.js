import React from "react";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";

const Main = (props) => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop props={props} />} />
          <Route path=":id" element={<Product props={props} />} />
        </Route>
      </Routes>
      <Cart cart={props}/>
    </div>
  );
};

export default Main;
