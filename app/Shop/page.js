import DropDown from '@/components/DropDown/DropDown'
import Products from '@/components/Products/Products'
import React from 'react'

const Shop = () => {
  return (
    <section className='bg-rose-100 '>
    <h1 className=' font-semibold italic text-3xl pl-10 m-6  '> Shop</h1>
<DropDown/>
    <div>
<Products/>
    </div>
    </section>
  )
}

export default Shop