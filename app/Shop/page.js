import Products from '@/components/Products/Products'
import React from 'react'

const Shop = () => {
  return (
    <section className='bg-slate-200 '>
    <h1 className='  font-bold text-center p-3 my-10'> All Products</h1>

    <div>
<Products/>
    </div>
    </section>
  )
}

export default Shop