"use client"
import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const DetailCard = ({product}) => {
  return (
    <div>  <div className="flex">
    
    <div className='shadow-md w-2/3 hover:scale-105 duration-200 bg-white rounded-lg  flex gap-2 flex-col p-3 justify-around items-center '>
   <Image width={250} height={250} alt='p' className='object-contain ' src={product.image} />
   <h2 className='text-gray-900 font-bold leading-6  text-xl text-center flex '>{product.title.substring(0,25)}</h2>
   <span className='text-1xl italic font-bold pb-2 text-gray-800'>{product.price}</span>

<div className='flex w-full justify-around place-items-center '>
   <button className='border-solid w-2/3  h-12 border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200'>Add in Card </button>
   </div>
   <div className='flex gap-1 self-start'>
     <AiFillStar/>
     <AiFillStar/>
     <AiFillStar/>
     <AiFillStar/>
     <span>{product.rating.count}</span>
</div>
</div>
<div className=' w-1/3 bg-gray-100'>{product.description}</div>
</div></div>
  )
}

export default DetailCard