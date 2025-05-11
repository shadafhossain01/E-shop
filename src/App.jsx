import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
<Routes>
 <Route path="/" element={<HomePage/>} />
 <Route path="/product" element={<ProductPage/>} />
 <Route path="/blog" element={<BlogPage/>} />
 <Route path="/cart" element={<CartPage/>} />
 <Route path="/checkout" element={<CheckoutPage/>} />
 <Route path="/contact" element={<ContactPage/>} />
</Routes>
  )
}

export default App