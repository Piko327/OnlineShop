"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsCartDashFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SingIn from "../SingIn/SingIn";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  const activeNavHandler = () => {
    setActiveNav(!activeNav);
  };

  return (
    <section className="px-1 py-2 flex bg-slate-50 justify-between items-center border-solid border-b-2 border-sky-500">
      {/*Logo */}
      <span className="text-2xl italic font-bold">T-Shop</span>

      <Navbar props={{ activeNav, activeNavHandler }} />
      <div className="flex">
        <SingIn />
        <div className=" lg:flex p-2 relative items-center">
          <BsCartDashFill className="text-2xl mt-6 lg:mt-1" size={30} />
          <p className=" bg-gray-800 p-0.5 text-slate-50 absolute top-6 right-1">
            0
          </p>
        </div>
        <div className="lg:hidden flex " onClick={activeNavHandler}>
   
          {activeNav ? (
            <AiOutlineClose className="self-center ml-4 w-8 h-8 lg:hidden" />
          ) : (
            <AiOutlineMenu className="self-center ml-4 w-8 h-8 lg:hidden" />
          )}

        </div>
      </div>
    </section>
  );
};
//<AiOutlineMenu className="self-center ml-4 w-8 h-8 lg:hidden" />
export default Header;
