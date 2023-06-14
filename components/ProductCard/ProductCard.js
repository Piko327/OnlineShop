import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addOrder } from "@/app/redux/features/orders";
const ProductCard = ({ product }) => {
  const dispach = useDispatch();
  const addToCardHadler = () => {
    dispach(
      addOrder({
        id: product.id,
        title: product.title,
        image: product.image,
        description: product.description,
        price: product.price,
        quantity: 1,
      })
    );
  };
  return (
    <div className="shadow-md w-56 h-60 hover:scale-105 duration-200 bg-white rounded-lg  flex  flex-col px-4 justify-around items-center ">
      <Image
        width={100}
        height={80}
        alt="p"
        src={product.image}
        className="p-2 min-w-[70%] max-h-[50%] "
      />
      <h2 className="text-gray-900 font-bold leading-6 text-center flex ">
        {product.title.substring(0, 25)}
      </h2>
      <span className=" pb-2 font-semibold text-gray-800">
        ${product.price}
      </span>

      <div className="flex w-full justify-around place-items-center ">
        <button
          onClick={addToCardHadler}
          className=" w-16 border-solid  border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200"
        >
          Add in Card
        </button>
        <Link
          className="border-solid h-full w-14 pt-2 border-rose-950 text-rose-100  bg-rose-950 border-2 text-center hover:scale-105 duration-200"
          href={`Shop/product/${product.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
