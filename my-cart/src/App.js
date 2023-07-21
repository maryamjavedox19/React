
import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList.js";


function App() {
  const productList = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];


  return (
    <>
    <ProductList ProductList={productList}/>
    <Navbar/>
    </>
   );

}

export default App;
