"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const DetailCard = ({ product }) => {
  return (
    <div >
   
      <div className="flex min-h-[65vh] pt-20  relative bg-white">
        <div className="  flex w-2/3  flex-col p-3 mr-5 justify-around items-end">
          <Image
            width={250}
            height={250}
            alt="productImg"
            className="object-contain"
            src={product.image}
          />
        </div>
        <div className="flex  w-2/3 flex-col gap-4 justify-center">
        
          <h2 className="text-gray-900 font-bold leading-6 absolute inset-x-0 top-28   text-xl text-center">
            {product.title}
          </h2>
          <span className="text-1xl italic font-semibold pb-2 text-gray-800">
           BGN: {product.price}
          </span>
          <div className="flex w-full justify-around place-items-center "></div>
          <div className=" w-2/3 text-gray-700">{product.description}</div>
          <div className="flex gap-1 self-start">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="text-rose-950">{product.rating.count}</span>
          </div>
          <button className="border-solid w-1/3  h-8 border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200">
            Add in Card{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
