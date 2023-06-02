import React from 'react'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
const ProductCard = ({product}) => {
  return (

    <div className='shadow-md hover:scale-105 duration-200 bg-white rounded-lg max-w-sm flex gap-2 flex-col p-3 justify-around items-center '>
        <Image width={150} height={200} alt='p' className='object-contain min-h-[50%] max-h-60 min-w-[40%] max-w-[50%]' src={product.image} />
        <h2 className='text-gray-900 font-bold leading-6  text-xl text-center flex '>{product.title.substring(0,25)}</h2>
        <span className='text-1xl italic font-bold pb-2 text-gray-800'>{product.price}</span>

   <div className='flex w-full justify-around place-items-center '>
        <button className='border-solid w-1/3  h-12 border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200'>Add in Card </button>
      <Link searchParams={product} className='border-solid  w-1/3  h-12 border-rose-950 text-rose-100  bg-rose-950 border-2 text-center pt-3  hover:scale-105 duration-200' href={{
        pathname:`Shop/product/${product.id}`,
        product:{product}
      }}> Details</Link>
        </div>
        <div className='flex gap-1 mb-3 self-start'>
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