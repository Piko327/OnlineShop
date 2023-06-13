
'use client'
import { DropDown } from '@/components/DropDown/Dropdown'
import Products from '@/components/Products/Products'
import {  React,useState } from 'react'

const Shop = () => {
const [category,setCategory]=useState("All")
  return (
    <div className='bg-gray-200  flex flex-col min-h-[70vh] '>
    <h1 className='font-bold italic ml-40  text-3xl pl-10 m-6'>Shop</h1>
  
<DropDown setCatagory={setCategory}/>

<Products  category={category}/>
    
    </div>
  )
}

export default Shop