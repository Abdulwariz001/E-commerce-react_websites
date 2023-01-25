import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Thenav/Nav';
import Home from './Pages/Home';
import NotFound from './Component/NotFound';
import Login from './Pages/Login';
import Productpage from './Pages/Productpage';
import Registration from './Pages/Registration';
import Details from './Pages/Details';
import './App.css';
// import React from 'react';
// import Product from './Component/Product';

function App(){
  return(
   <BrowserRouter>
   <>
   <Nav />
   <Routes>
   <Route path='/' element={<Home />} />
       <Route path="/products" element={<Productpage />} />
       <Route path="/product/:id" element={<Details />} />
       <Route path="/register" element={<Registration />} />
       <Route path='login' element={<Login />}/>
       <Route path='*' element={<NotFound />}></Route>
   </Routes>
   </>
   </BrowserRouter>
  )
}
export default App;


