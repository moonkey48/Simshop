import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsListContainer from './components/products/ProductsListContainer';
import Header from './components/header/header';
import ProductContainer from './components/product/ProductContainer';
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsListContainer/>} />
        <Route path='/products' element={<ProductsListContainer/>}/>
        <Route path='/products/:id' element={<ProductContainer/>} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools/>
    </>
  );
}

export default App;
