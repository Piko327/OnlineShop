"use client";
import Baner from "@/components/Baner/Baner";
import Dropdown from "@/components/DropDown/Dropdown";
import Products from "@/components/Products/Products";
import { React, useState } from "react";

const Shop = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      {" "}
      <Baner src="/asset/backgroundShop.jpg" />
      <div className="bg-gray-200  flex flex-col min-h-[70vh] mt-96  ">
      <h2 className="absolute top-40 opacity-2 z-20 text-center backdrop-blur-sm text-rose-200  p-5 m-3  text-2xl  font-bold italic">
          Discover the Thrills of Online Shopping: Your Gateway to Unforgettable
          Finds!
        </h2>
        <Dropdown setCatagory={setCategory} />

        <Products category={category} />
      </div>
    </>
  );
};

export default Shop;
