import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import './App.css';


function App() {
  return (
    <BrowserRouter basename="/Bakery-Inventory">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="productDetail/:sku" element={<ProductDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
