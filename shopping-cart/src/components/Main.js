import React from "react";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Cart />
    </div>
  );
};

export default Main;
