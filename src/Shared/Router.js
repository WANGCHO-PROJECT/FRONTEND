import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Components/Main';
import Test from '../Pages/DetailPage';
import Login from '../Pages/Login';
import Post from '../Pages/Posts';
import Signup from '../Pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/write' element={<Post />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path=':id' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
