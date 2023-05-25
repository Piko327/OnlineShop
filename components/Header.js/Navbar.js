'use client'
import Link from "next/link";
import React from "react";
import uniqid from 'uniqid';
const Navbar = ({active}) => {
  
  return (
    <>
     {
        //Mobile
      }
      <nav className='w-2/3 absolute  flex-col lg:hidden  text-center bg-slate-50 text-gray-700 left-0 top-28  shadow-md border-solid border-b-2 border-r-2 border-gray-400'>
        <ul className=" flex-col text-2xl py-12  h-96">
          {" "}
          {[
            ["Home", "/"],
            ["About us", "/about"],
            ["Shop", "/products"],
            ["Card", "/payment"],
          ].map(([title, url]) => (
            <li key={uniqid()} className="m-2 p-2 border-solid border-b-2 border-gray-200 hover:text-gray-900 ease-in duration-150">
              <Link href={url}>{title}</Link>
            </li>
          ))}{" "}
        </ul>
      </nav>
     {" "}

      <nav className=" hidden lg:block">
        <ul className="flex text-2xl  justify-evenly items-center">
          {" "}
          {[
            ["Home", "/"],
            ["About us", "/about"],
            ["Shop", "/products"],
            ["Card", "/payment"],
          ].map(([title, url]) => (
            <li key={uniqid()} className="m-2 p-2 hover:text-gray-900 ease-in duration-150">
              <Link href={url}>{title}</Link>
            </li>
          ))}{" "}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
