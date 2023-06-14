"use client";
import { removeOrder, resetAllOrder } from "@/app/redux/features/orders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispach = useDispatch();

  const totalPrice = orders.reduce((accumulator, order) => {
    return accumulator + order.quantity * order.price;
  }, 0);

  return (
    <div className="absolute z-50 right-5  top-16 bg-slate-200 rounded-sm shadow-lg ">
      <h1 className="m-2 font-semibold text-lg ">Products in your cart</h1>
      {orders?.length == 0 ? (
        <div className="px-16 py-6 italic text-xl ">
          Not Product in your cart
        </div>
      ) : (
        <div className="px-4">
          {orders?.map((product) => (
            <div
              key={product.id}
              className="flex  border-zinc-400 max-h-28  border-solid border-b-2 mb-2"
            >
              <Image
                alt="orderImg"
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
              <div className="flex flex-col justify-around items-center">
                <AiOutlineDelete
                  className="text-rose-600  text-xl"
                  onClick={() => dispach(removeOrder(product.id))}
                />
                <p className="bg-gray-100 font-semibold ">{product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex text-sm m-3  justify-between">
        <button
          onClick={() => dispach(resetAllOrder())}
          className=" text-sm text-rose-950 font-bold"
        >
          Clean All Orders
        </button>
        <div className="font-bold">
          <span className="text-lg  font-semibold">Total:</span> $
          {totalPrice.toFixed(2)}
        </div>
      </div>
      {orders.length >= 1 && (
        <div className="m-3 border-solid w-2/4 py-1  border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200">
        
          <Link href={"/"} className=" ">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
