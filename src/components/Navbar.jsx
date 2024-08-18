import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaCartArrowDown } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const location=useLocation();

  const {cartItems} = useSelector((state)=>state.cart); 
  const [viewNav, setviewNav] = useState(false);
  // console.log(cartItems);

  useEffect(()=>{
    setviewNav(false);
  }, [location.pathname])
  return (
    <>
    <div className='hidden max-w-[1200px] mx-auto md:flex flex-row items-center justify-between py-2 text-sm'>
        
        <div className='flex flex-row items-center justify-center gap-4 text-lg font-bold italic'>Chanta</div>

        <div className='flex flex-row items-center justify-center gap-5'>
            <Link to={'/products'}>Shop</Link>
            {/* <div>Shop</div> */}
            <div>Collections</div>
            <div>Explore</div>
            {/* <div className='flex flex-row items-center justify-center'>...</div> */}
        </div>
        <div className='flex flex-row items-center justify-center gap-5'>
            <div className='flex flex-row items-center justify-start gap-2'>
              <FaCartArrowDown />
              <Link to={"/cart"}>Cart {cartItems.length}</Link>
              </div>
            <div className='flex flex-row items-center justify-start gap-2'>
            <VscAccount />
              <div>My account</div>
              </div>
        </div>
    </div>
    <div className='md:hidden max-w-[1200px] mx-auto flex flex-row items-center justify-between py-2 text-sm' >

      <div className='flex flex-row items-start justify-between w-full px-5'>

        
        <div className='flex flex-row items-center justify-center gap-4 text-lg font-bold italic z-20'>Chanta</div>

       {/* {!viewNav?<div onClick={()=>{setviewNav(true)}}><GiHamburgerMenu className='text-lg' /></div>:
       <div onClick={()=>{setviewNav(false)}}><GiHamburgerMenu className='text-lg' /><IoMdClose /></div>} */}
       {!viewNav && <GiHamburgerMenu className='text-lg z-20' onClick={()=>{setviewNav(true)}}/>}
       {viewNav && <IoMdClose className='text-lg z-20' onClick={()=>{setviewNav(false)}}/>}
       </div>

       <div className={`h-[300px] overflow-hidden bg-gray-100 text-gray-600  z-10 w-full fixed top-0 flex flex-col items-center 
       justify-center gap-5 text-lg scale-y-0 ${viewNav?"scale-y-100":""} transition-all duration-300 origin-top`}>

          <Link to={'/products'}>Shop</Link>
          <div>Explore</div>
          <div>Collections</div>
          <div className='flex flex-row items-center justify-start gap-2'>
              <FaCartArrowDown />
              <Link to={"/cart"}>Cart {cartItems.length}</Link>
              </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <VscAccount />
              <div>My account</div>
              </div>
        </div>

        {/* <div className='flex flex-row items-center justify-center gap-5'>
            <Link to={'/products'}>Shop</Link>
            <div>Collections</div>
            <div>Explore</div>
        </div> */}
        {/* <div className='flex flex-row items-center justify-center gap-5'>
            <div className='flex flex-row items-center justify-start gap-2'>
              <FaCartArrowDown />
              <Link to={"/cart"}>Cart {cartItems.length}</Link>
              </div>
            <div className='flex flex-row items-center justify-start gap-2'>
            <VscAccount />
              <div>My account</div>
              </div>
        </div> */}
    </div>
    </>
  )
}

export default Navbar