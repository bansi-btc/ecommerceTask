import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar';
import Product from './components/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {

  // const {cartItems}=useSelector((state)=>state.cart);
  // console.log(cartItems)
  return (
    <div className='w-full min-h-screen bg-[#e5e5e5] pb-5 px-0'>
      <Navbar/>

      <Routes>
        {/* <Link */}
        <Route path='/' element={<div className='max-w-[1200px] mx-auto'><Link to={"/products"}>Go to shop page</Link></div>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      


      </Routes>


      <ToastContainer/>
    </div>
  )
}

export default App