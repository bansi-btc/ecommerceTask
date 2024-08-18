import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAmount, incrementAmount, removeFromCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cartItems} = useSelector((state)=>state.cart);
    const [totalPrice, settotalPrice] = useState(0)
    const [promoCode, setpromoCode] = useState('')
    const [discount, setdiscount] = useState(0)

    const dispatch=useDispatch();

    const handleIncAmount=(id)=>{

        dispatch(incrementAmount({id}))
    }

    const handleDecAmount=(id)=>{
        dispatch(decrementAmount({id}));
    }

    const handleDelete=(id)=>{
        console.log(id)
        dispatch(removeFromCart({id}));
    }

    const calculateTotalPrice=()=>{

        let tp=0;
        for(let val of cartItems){
            tp+= Number(val.price.substr(1))*(val.amount);
        }

        // console.log(tp);

        settotalPrice(tp);
    }

    const [freeDel, setfree] = useState(false)
    const [disCountApplied, setdisCountApplied] = useState(false);

    const handlePromoChange=(e)=>{
        setpromoCode(e.target.value);
    }

    const handleApplyDiscount=()=>{
        if(!promoCode || disCountApplied){
            return;
        }   

        // totalPrice-=0.2*totalPrice
        // console.log(totalPrice)
        let dis=totalPrice*0.2;
        // console.log(dis);
        setdiscount(dis);
        settotalPrice((prev)=>{
            return prev-dis;
        })
        // console.log(totalPrice);
        setdisCountApplied(true);
    }

    // calculateTotalPrice();

    useEffect(()=>{
        // localStorage.clear();
        calculateTotalPrice();
        localStorage.setItem("cart", JSON.stringify(cartItems));
        // console.log(cartItems)
    }, [cartItems])

    


  return (
    <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start justify-between mt-20 gap-10'>
        <div className="left w-[95%] lg:w-[62%] bg-white min-h-[300px] rounded-md flex flex-col items-start justify-start px-5 py-5 gap-4">
            <div className='text-gray-800 text-2xl font-medium'>Cart</div>

            {cartItems.length==0 && <div className='flex flex-col items-center justify-center w-full py-10
             gap-4'>
                <div className='text-3xl text-gray-600 font-medium font-sans'>Cart is empty</div>
                
                <Link to={"/products"} className='bg-blue-500 py-2 w-[60%] mx-auto rounded-md text-gray-100
                text-center'>Shop Now</Link>
                </div>}

            <div className='w-full flex flex-col items-start justify-start gap-0'>
                {cartItems.map((pro, idx)=>{
                    return <div key={idx} className='py-5 border-t-2 border-gray-100 w-full flex flex-row items-center justify-start gap-5'>

                        <div className='h-[160px] w-[130px] bg-gray-100 flex flex-col items-center justify-center'>
                            <img src={pro.image} alt="" className='w-[80%]' />
                        </div>

                        <div className='flex flex-col items-start justify-center w-[70%] gap-3'>
                            <div className='flex flex-row items-start justify-between text-gray-500 w-full'>
                                <div>{pro.name}</div>

                                <div>${Number(pro.price.substr(1))*(pro.amount)}</div>
                            </div>

                            <div className='flex flex-row items-start justify-start gap-2 text-gray-500 w-full text-sm'>
                                <div>{pro.price}</div>
                                <div className='text-green-500 border-l border-gray-300 pl-2'>In stock</div>
                            </div>

                            <div className='w-full flex flex-row items-start justify-between'>


                            <div className='border border-gray-200 px-3 py-[1px] flex flex-row items-center justify-center gap-3
                            rounded-md text-gray-500'>

                                <div onClick={()=>{handleDecAmount(pro.id)}}>-</div>
                                <div>{pro.amount}</div>
                                <div onClick={()=>{handleIncAmount(pro.id)}}>+</div>
                            </div>

                            <div className='flex flex-row items-start justify-start gap-3 text-gray-500'>
                                <div>Save</div>
                                <div onClick={()=>{handleDelete(pro.id)}}>Delete</div>
                            </div>
                            </div>

                        </div>
                    </div>
                })}
            </div>

        </div>
        <div className="right w-[95%] lg:w-[35%] bg-white min-h-[500px] rounded-md flex flex-col items-start justify-start px-5 py-5 gap-6">

            <div className='w-full flex flex-col items-start justify-start gap-2'>

            
            <div className='text-gray-600 text-base font-medium'>Delivery</div>

            <div className='toggle bg-gray-300 text-gray-800 rounded-md flex flex-row items-center justify-between 
            gap-0 shadow-sm shadow-gray-300'>
                <div className={`${freeDel?"bg-gray-100":"text-gray-600"} py-2 px-4 rounded-md`}
                onClick={()=>{setfree(true)}}>Free</div>
                <div className={` py-2 px-4 ${!freeDel?"bg-gray-100":"text-gray-600"} rounded-md `}
                onClick={()=>{setfree(false)}}>Express : $9.99</div>
            </div>

            <div className='text-sm text-gray-400 font-mono'>Delivery date June 24, 2024</div>
            </div>

            <div className='w-full flex flex-col items-start justify-start gap-2'>

            

            <div className='w-full relative flex flex-col items-center justify-center'>
                <input type="text" placeholder='Apply promo code' className='bg-gray-200 w-[100%] py-2 px-4
                rounded-md placeholder:text-gray-500 pr-24 focus:outline-none' value={promoCode} onChange={handlePromoChange} />
                <div className='absolute py-2 right-0 px-4 bg-gray-50 text-gray-800 border border-gray-300
                rounded-md' onClick={handleApplyDiscount}>Apply</div>
            </div>
             
             <div className='w-full flex flex-row items-start justify-start gap-4'>

            {disCountApplied && <div className='text-green-400 text-sm font-mono'>Discount Applied</div>}

            <div className='text-sm text-gray-400 gap-1 font-mono'>20% off Discount</div>
             </div>

            </div>

            <div className='w-full flex flex-col items-start justify-start border-t border-b border-gray-200 py-5 gap-2'>

                <div className='w-full flex flex-row items-start justify-between text-gray-500 text-base'>
                    <div>Subtotal</div>
                    <div>${totalPrice}</div>
                </div>
                <div className='w-full flex flex-row items-start justify-between text-gray-400 text-sm'>
                    <div>Discounts</div>
                    <div>${disCountApplied?discount:0}</div>
                </div>
                <div className='w-full flex flex-row items-start justify-between text-gray-400 text-sm'>
                    <div>Delivery</div>
                    <div>${!freeDel?9.99:0}</div>
                </div>
                <div className='w-full flex flex-row items-start justify-between text-gray-400 text-sm'>
                    <div>Tax</div>
                    <div>$0.00</div>
                </div>
                
            </div>

            <div className='w-full flex flex-row items-start justify-between text-sm'>
                <div className='text-gray-500 '>Total</div>
                <div className='text-gray-500'>${freeDel?totalPrice:totalPrice+9.99}</div>
            </div>

            <div className='w-full flex flex-col items-center justify-start gap-2'>
                <div className="btn bg-blue-500 w-full text-center py-2 px-4 rounded-md
                text-gray-50">Proceed to checkout</div>
                <div className="btn bg-gray-200 w-full text-center py-2 px-4 rounded-md
                text-gray-500">Continue Shopping</div>
            </div>

        </div>
    </div>
  )
}

export default Cart