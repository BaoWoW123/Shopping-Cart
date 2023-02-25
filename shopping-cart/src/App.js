import "./styles/app.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
