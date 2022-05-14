import './App.css';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
// import Navbar from './Component/Navbar'

import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Admin from './pages/Admin';

import * as React from "react";

import {
  BrowserRouter,
  Routes,
  Route,  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Ra from './pages/Ra';
import Data from './pages/Data';

function App() {
  // const user=useSelector(state=>state.user.currentUser)  
  


  
  return (
    <div >

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/products/:category" element={<ProductList/> } />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} /> 
          {/* <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route> */}

          {/* <Route path="/login": <Login/>} </Route> */}
           <Route path="/login" element={<Login/>} />

          <Route path="/register" element={<Register/>} />
          <Route path="/shopping" element={<Data/>} />
          <Route path="/admin" element={<Admin/>} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
