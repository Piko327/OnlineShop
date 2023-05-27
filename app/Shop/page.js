
'use client'

import { DropDown } from '@/components/DropDown/Dropdown'
import Products from '@/components/Products/Products'
import {  React,useState } from 'react'

const Shop = () => {
const [category,setCategory]=useState("All")
  return (
    <section className='bg-gray-200  flex flex-col'>
    <h1 className=' font-semibold italic self-center text-3xl  pl-10 m-6'> Shop</h1>
  
<DropDown setCatagory={setCategory}/>

<Products  category={category}/>
    
    </section>
  )
}

export default Shop