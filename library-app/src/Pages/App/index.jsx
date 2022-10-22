import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import DetailContent from '../DetailContent';

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/detail-content/:id' element={<DetailContent/>} />
            <Route path='/detail-content' element={<DetailContent/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index