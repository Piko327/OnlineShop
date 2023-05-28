import React from 'react'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
const ProductCard = ({product}) => {
  return (

    <div className='shadow-md hover:scale-105 duration-200 bg-white rounded-lg max-w-sm flex gap-2 flex-col p-3 justify-around items-center '>
        <Image width={250} height={250} alt='p' className='object-contain min-h-[60%] max-h-60 min-w-[70%] ' src={product.image} />
        <h2 className='text-gray-900 font-bold leading-6  text-xl text-center flex '>{product.title.substring(0,25)}</h2>
        <span className='text-1xl italic font-bold pb-2 text-gray-800'>{product.price}</span>
        <button className='border-solid border-rose-950 bg-rose-100  text-rose-950 border-2 px-1 py-2 mb-5 hover:scale-105 duration-200'>Add in Card </button>
        <div className='flex gap-1 self-start'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <span>{product.rating.count}</span>
    </div>
 </div>
  )
}

export default ProductCard