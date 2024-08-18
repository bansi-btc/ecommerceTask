import React from 'react'
import { FaAngleDown } from "react-icons/fa";

import ProductCard from './ProductCard';

const Product = () => {

    const products=[
        {
            id:1,
            name:"American tourister 32L",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998735/img2_p3pzcv.png",
            price:"$300"
        },
        {
            id:2,
            name:"Herculer bicycle",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998722/img3_dzrqne.png",
            price:"$500",
        },
        {
            id:3,
            name:"Nike Sport jacket",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998723/img6_nrxxla.png",
            price:"$300",
        },
        {
            id:4,
            name:"Nike running shoes",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998720/img12_ffg0tt.png",
            price:"$400",
        },
        {
            id:5,
            name:"Rolex wrist watch",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998720/img14_wjqkec.webp",
            price:"$420",
        },
        {
            id:6,
            name:"Playstation 5",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723999780/ipnaia4m33idb3qn5loq.webp",
            price:"$800",
        },
        {
            id:7,
            name:"Yonex Racquet",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723999781/zywiuwuaqdw7eek8trhr.png",
            price:"$300",
        },
        {
            id:8,
            name:"Canon DSLR",
            image:"https://res.cloudinary.com/dxajun5s3/image/upload/v1723998720/img26_aax1br.webp",
            price:"$1200",
        },
        
       
    ]
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:items-start justify-start gap-10 pt-10 lg:pt-20 px-5 
    lg:px-0'>
        <h1 className='text-4xl text-gray-900 font-semibold'>Get Inspired</h1>

        <div className='text-gray-700 text-center md:text-start md:w-[55%] text-md'>Browsing for your next long-haul trip, everyday journey, or just fancy a look at what's
new? From community favourites to about-to-sell-out items, see them all here.</div>

        <div className='w-full flex flex-row items-center justify-between '>
            <div className='w-[100%] flex flex-row items-center justify-center lg:justify-start gap-10 flex-wrap'>
            <div className='flex flex-row items-center justify-center gap-4 text-sm bg-white px-5 py-2 rounded-full'>
                <div className='flex flex-col items-start justify-center gap-0'>
                <div className='text-xs'>Category</div>
                <div className='text-base font-semibold'>All categories</div>
                </div>

                <FaAngleDown />
            </div>
            <div className='flex flex-row items-center justify-center gap-3 text-sm bg-white px-5 py-2 rounded-full'>
                <div className='flex flex-col items-start justify-center gap-0'>
                <div className='text-xs'>Colors</div>
                <div className='text-base font-semibold'>All colors</div>
                </div>

                <FaAngleDown />
            </div>
            <div className='flex flex-row items-center justify-center gap-3 text-sm bg-white px-5 py-2 rounded-full'>
                <div className='flex flex-col items-start justify-center gap-0'>
                <div className='text-xs'>Features</div>
                <div className='text-base font-semibold'>All features</div>
                </div>

                <FaAngleDown />
            </div>
            <div className='flex flex-row items-center justify-center gap-3 text-sm bg-white px-5 py-2 rounded-full'>
                <div className='flex flex-col items-start justify-center gap-0'>
                <div className='text-xs'>From</div>
                <div className='text-base font-semibold'>$10 - $20</div>
                </div>

                <FaAngleDown />
            </div>

            <div className='flex flex-row items-center justify-center gap-3 text-sm bg-white px-5 py-2 rounded-full '>
                <div className='flex flex-col items-start justify-center gap-0'>
                <div className='text-xs'>Sort</div>
                <div className='text-base font-semibold'>New In</div>
                </div>

                <FaAngleDown />
            </div>
            </div>

            
        </div>

        <div className='w-full flex flex-row items-center justify-around flex-wrap gap-y-10'>

            {products.map((pro)=>{
                return  <ProductCard key={pro.id} {...pro}/>
            })}

           
        </div>
        
        {/* <img src="https://" alt="" /> */}


    </div>
  )
}

export default Product