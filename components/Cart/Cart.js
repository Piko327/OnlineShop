import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.products.value).filter(
    (x) => x.id > 18
  );
  return (
    <div className="absolute z-50 right-5 top-16 bg-slate-200 rounded-sm ">
      <h1 className="m-2 font-semibold text-lg ">Products in your cart</h1>
      {products.length == 0 ? (
        <div className="p-10">Not Product in your cart</div>
      ) : (
        <div className="px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex  border-zinc-400 max-h-28 border-solid border-b-2 mb-2"
            >
              <Image
                width={40}
                height={5}
                src={product.image}
                className="mx-3 my-1"
              />
              <div className="flex flex-col gap-2 mb-2">
                <h1 className="truncate ">{product.title.substring(0, 14)}</h1>
                <span className="text-gray-800 ">BGN: {product.price}</span>
                <span className="text-gray-700 truncate  ">
                  {product.description.substring(0, 40)}
                </span>
              </div>
              <AiOutlineDelete className="text-rose-600  text-xl" />
            </div>
          ))}
        </div>
      )}
      <div className="flex text-sm m-3  justify-between">
        <div className=" text-sm text-rose-950 font-bold">
          Clean All Orders
        </div>
        <div>Total Price:BGN:{"400"}</div>
      </div>
    </div>
  );
};

export default Cart;
