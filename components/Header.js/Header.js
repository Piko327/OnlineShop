import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {

  return (
    <section className="flex justify-between">
      <span className=" font-bold p-4 self-center bg-slate-900 text-slate-100"
       >T-Shop</span>
      <Navbar />

<BsCartDashFill/>

      {true ? (
        <div>
          <Image></Image>
          <p>name</p>
        </div>
      ) : (
        <button>Sing up</button>
      )}
    </section>
  );
};

export default Header;
