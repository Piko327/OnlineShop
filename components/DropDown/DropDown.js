'use client'
import React, { useState } from 'react'
import uniqid from "uniqid";
const DropDown = (props) => {

    const [dropDown,setDropDown]=useState(false)
    console.log(props)
    const onClickHandler=()=>
    {

    }
  return (
    <div>
        <button id="dropdownDefaultButton" onClick={()=>setDropDown(!dropDown)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


<div  className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownDefaultButton">
    {["Men","Women","Electronic","jewelery"].map((title) => (
    <li>
        <a href="#"  i
      onClick={() => props.activeNavHandler()} key={uniqid()} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{title}</a>
      </li>
  ))}
    </ul>
</div>
    </div>
  )
}

export default DropDown