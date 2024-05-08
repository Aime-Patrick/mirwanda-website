import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import Team from './pages/Team';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
        <Route path='store' element={<OurStore />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='wishlist' element={<WishList />} />
        <Route path='login' element={<Login />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='blog/:id' element={<SingleBlog />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
