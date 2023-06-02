"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsCartDashFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SingIn from "../SingIn/SingIn";
import Link from "next/link";


const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
 
  const activeNavHandler = () => {
    setActiveNav(!activeNav);
  };

  return (
    <section className="px-6 flex bg-gray-100 justify-between items-center border-solid border-b-2 border-rose-600">
      {/*Logo */}
      <Link  href="/"className="text-2xl italic font-bold">T-Shop</Link>

      <Navbar props={{ activeNav, activeNavHandler }} />
      <div className="flex">
        <SingIn />
        <div className=" lg:flex p-2 relative items-center">
          <BsCartDashFill className="text-2xl mt-6 lg:mt-1" size={25} />
          <p className=" bg-gray-900 p-0.5 text-rose-100 absolute top-6 right-1">
            0
          </p>
        </div>
        <div className="lg:hidden flex " onClick={activeNavHandler}>
   
          {activeNav ? (
            <AiOutlineClose className="self-center ml-4 w-7 h-7 text-rose-950 lg:hidden" />
          ) : (
            <AiOutlineMenu className="self-center ml-4 w-7 h-7 text-rose-950  lg:hidden" />
          )}

        </div>
      </div>
    </section>
  );
};
//<AiOutlineMenu className="self-center ml-4 w-8 h-8 lg:hidden" />
export default Header;
