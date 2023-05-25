"use client";
import React from "react";
import Navbar from "./Navbar";
import { BsCartDashFill } from "react-icons/bs";
import SingIn from "../SingIn/SingIn";


const Header = () => {
  return (
    <section className="flex justify-between">
      <span className=" font-bold p-4 self-center bg-slate-900 text-slate-100">
        T-Shop
      </span>
      <Navbar />

      <div className="flex p-2 relative">
        <BsCartDashFill className="text-2xl" />
        <p className=" bg-gray-800 text-slate-50 absolute top-1 right-12">0</p>
       
       <SingIn/>
      </div>
    </section>
  );
};

export default Header;
