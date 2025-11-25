import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Products from "../Components/Products";
import ProductDetails from "../Components/ProductDetails";
import About from "../Components/About";
import StoreDetail from "../Components/StoreDetail";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:title" element={<ProductDetails />} />
      <Route path="/about" element={<About />}>
        <Route path="/about/:title" element={<StoreDetail />} />
      </Route>
    </Routes>
  );
}

export default Routing;
