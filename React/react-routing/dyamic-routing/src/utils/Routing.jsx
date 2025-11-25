import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Products from '../Components/Products';
import ProductDetails from '../Components/ProductDetails';

function Routing() {
  return (
   <Routes>
    <Route path='/' element ={<Home />} />
    <Route path='/products' element ={<Products />} />
    <Route path='/products/:title' element ={<ProductDetails />} />
   </Routes>
  )
}

export default Routing
