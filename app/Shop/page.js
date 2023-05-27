
'use client'

import { DropDown } from '@/components/DropDown/Dropdown'
import Products from '@/components/Products/Products'
import {  React,useState } from 'react'

const Shop = () => {
const [category,setCategory]=useState("")
  return (
    <section className='bg-gray-200 '>
    <h1 className=' font-semibold italic text-3xl pl-10 m-6'> Shop</h1>
  
<DropDown setCatagory={setCategory}/>
    <div>
<Products  category={category}/>
    </div>
    </section>
  )
}

export default Shop