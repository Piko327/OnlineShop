import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
const ProductCard = ({ product }) => {
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
        BGN: {product.price}
      </span>

      <div className="flex w-full justify-around place-items-center ">
        <button className=" w-16 border-solid  border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200">
          Add in Card{" "}
        </button>
        <Link
          searchParams={product}
          className="border-solid h-full w-14 pt-2 border-rose-950 text-rose-100  bg-rose-950 border-2 text-center hover:scale-105 duration-200"
          href={{
            pathname: `Shop/product/${product.id}`,
            product: { product },
          }}
        >
          {" "}
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
