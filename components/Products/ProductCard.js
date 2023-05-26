import React from 'react'

const ProductCard = ({product}) => {
  return (

    <div className='shadow-md hover:scale-105 duration-200 bg-white rounded-lg max-w-sm flex gap-2 flex-col p-3 justify-around items-center '>
        <img  className='object-contain min-h-[70%]  max-h-60 min-w-[70%] w-64 ' src={product.image} />
        <h2 className='text-gray-900 font-bold leading-6  text-xl text-center flex '>{product.title}</h2>
        <span className='text-1xl italic font-bold pb-2 text-gray-800'>{product.price}</span>
    </div>
  )
}

export default ProductCard