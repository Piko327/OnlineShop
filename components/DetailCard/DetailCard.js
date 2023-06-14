"use client";
import { addOrder } from "@/app/redux/features/orders";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

const DetailCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispach = useDispatch();
  const addToCardHadler = () => {
    dispach(
      addOrder({
        id: product.id,
        title: product.title,
        image: product.image,
        description: product.description,
        price: product.price,
        quantity,
      })
    );
  };
  return (
    <div>
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
            ${product.price}
          </span>
          <div className="flex w-full justify-around place-items-center "></div>
          <div className=" w-2/3 text-gray-700">{product.description}</div>
          <div className="flex gap-2">
            <AiOutlinePlus
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-gray-300 hover:scale-105 duration-200  text-3xl "
            />
            <span className=" text-xl">{quantity}</span>
            <AiOutlineMinus
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              className="bg-gray-300 hover:scale-105 duration-200 text-3xl "
            />
          </div>
          <div className="flex gap-1 self-start">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="text-rose-950">{product.rating.count}</span>
          </div>
          <button
            onClick={addToCardHadler}
            className="border-solid w-1/3  h-8 border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200"
          >
            Add in Card{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
