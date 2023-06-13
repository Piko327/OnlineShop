"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsCartDashFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SingIn from "../SingIn/SingIn";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const activeNavHandler = () => {
    setActiveNav(!activeNav);
  };
  const activeCartHandler = () => {
    setActiveCart(!activeCart);
  };
  const btnStyle = "self-center ml-4 w-7 h-7 text-rose-950 lg:hidden";
  return (
    <section className="px-6 flex bg-gray-100 justify-between items-center border-solid border-b-2 border-rose-600">
      {/*Logo */}
      <Link href="/" className="text-2xl italic font-bold">
        T-Shop
      </Link>

      <Navbar props={{ activeNav, activeNavHandler }} />
      <div className="flex h-16">
        <SingIn />
        <div className=" lg:flex p-2 relative items-center">
          <BsCartDashFill
            onClick={activeCartHandler}
            className="text-2xl mt-6 lg:mt-1"
            size={25}
          />
          <p
            onClick={activeCartHandler}
            className=" bg-gray-900 p-0.5 text-rose-100 absolute top-3 right-2"
          >
            0
          </p>
        </div>
        <div className="lg:hidden flex " onClick={activeNavHandler}>
          {activeNav ? (
            <AiOutlineClose className={btnStyle} />
          ) : (
            <AiOutlineMenu className={btnStyle} />
          )}
        </div>
      </div>
      {activeCart && <Cart />}
    </section>
  );
};
//<AiOutlineMenu className="self-center ml-4 w-8 h-8 lg:hidden" />
export default Header;
