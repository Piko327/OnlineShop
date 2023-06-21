'use client'
import Image from 'next/image'
import React from 'react'


const Baner = ({src}) => {
 
  return (

<div className='absolute w-full h-1/2 z-0'> 
<Image className='scale-x-20 object-cover h-full w-full'
  width={1400}  //use the width of the image being used
  height={1000} //use the height of the image being used
  alt="water_portrait"
  src={src} //image saved in public/home
/>
</div>
  )
}

export default Baner