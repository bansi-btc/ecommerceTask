import React, { useEffect } from 'react'
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({id,image, name, price}) => {

    const {cartItems}=useSelector((state)=>state.cart);
    console.log(cartItems)
    const isInCart = cartItems.some((item) => item.id === id);

    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        // console.log(id, name, image, price);
        const tempProduct={
            id,
            name,
            image,
            price,
            amount:1,
            
            // image,

        }

        dispatch(addToCart(tempProduct));
        toast.success("Item added to cart")


    }

    const handleRemoveFromCart=()=>{
        let tempProduct={
            id,
        }

        dispatch(removeFromCart(tempProduct))
        toast.success("Item removed from cart")
    }

    

    useEffect(()=>{
        // localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(cartItems));
        // console.log(cartItems)
    }, [cartItems])
  return (
    <div className='w-[70%] sm:w-[43%] lg:w-[23%] flex flex-col items-start justify-start gap-1 relative'>


                <div className='absolute right-5 top-5'><IoMdHeart className='text-gray-400 text-lg' /></div>
                <div className='w-full h-[300px] bg-white flex flex-col items-center justify-center rounded-md'>
                    <img src={image} alt="" className='w-[60%]'/>
                </div>
                <div className='flex flex-col items-start justify-start gap-0 text-sm'>
                        <div className='text-base font-semibold'>{name}</div>
                        <div className='text-gray-600 '>By Himanshu Gupta</div>
                        <div className='font-semibold'>{price}</div>
                    </div>

                {!isInCart?<div className='w-full bg-gray-500 text-white py-1 text-center rounded-md' onClick={handleAddToCart}>
                    Add to cart
                </div>:
                <div className='w-full bg-gray-700 text-white py-1 text-center rounded-md' onClick={handleRemoveFromCart}>
                Remove from cart
            </div>}
                </div>
  )
}

export default ProductCard