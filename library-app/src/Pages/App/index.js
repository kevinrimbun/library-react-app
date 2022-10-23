import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import DetailContent from '../DetailContent';
import Auth from '../../Layout/Auth';

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/detail-content/:bookId' element={<DetailContent/>} />
            <Route path='/detail-content' element={<DetailContent/>} />
            <Route path='/layout' element={<Auth/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index