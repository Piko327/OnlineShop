import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav  >
       <ul className='flex justify-evenly items-center'>
      <li className='m-2 p-2'>
        <Link href="/">Home</Link>
      </li>
      <li className='m-2 p-2'>
        <Link href="/about">About Us</Link>
      </li>
      <li className='m-2 p-2'>
        <Link href="/product">Shop</Link>
      </li>
      <li className='m-2 p-2'>
        <Link href="/payment">Card</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar