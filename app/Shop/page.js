"use client";
import Baner from "@/components/Baner/Baner";
import Dropdown from "@/components/DropDown/Dropdown";
import Products from "@/components/Products/Products";
import MotionProvider from "@/providers/motionProvider";
import { useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Baner src="/asset/backgroundShop.jpg" />{" "}
      <MotionProvider>
        <h2 className="  relative m-auto opacity-2 z-20 text-center backdrop-blur-sm text-rose-200 w-4/6 md:w-1/3 p-2  text-xl lg:text-2xl  top-20 font-bold italic">
          Discover the Thrills of Online Shopping: Your Gateway to Unforgettable
          Finds!
        </h2>
        <div className="bg-gray-200  flex flex-col min-h-[70vh] mt-64  ">
          <Dropdown setCatagory={setCategory} />

          <Products category={category} />
        </div>
      </MotionProvider>
    </>
  );
};

export default Shop;
