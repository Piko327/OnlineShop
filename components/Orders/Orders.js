"use client";
import { removeOrder, resetAllOrder } from "@/app/redux/features/orders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete, } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
    const orders = useSelector((state) => state.orders.orders);
    const dispach = useDispatch();

    const totalPrice = orders.reduce((accumulator, order) => {
        return accumulator + order.quantity * order.price;
    }, 0);

    return (
        <div className=" bg-white h-[80vh] flex flex-col">
            <h1 className="p-2 font-semibold text-lg italic text-center ">
                ALL ORDERED PRODUCT
            </h1>

            {orders?.length == 0 ? (
                <div className="px-16 py-6 italic h-full  text-xl ">
                    Not Product in your cart
                </div>
            ) : (
                <div className="px-4  h-full ">
                    {orders?.map((product) => (
                        <div
                            key={product.id}
                            className="flex  border-zinc-400  border-solid border-b-2 mb-2"
                        >
                            <Image
                                alt="orderImg"
                                width={100}
                                height={100}
                                src={product.image}
                                className="mx-3 my-1"
                            />

                            <div className="flex flex-col gap-2 mb-2 w-[80%] ">
                                <h1 className="truncate ">{product.title.substring(0, 14)}</h1>

                                <span className="text-gray-800">BGN: {product.price}</span>

                                <span className="text-gray-700 truncate max-w-[90%] pb-2 ">
                                    {product.description}
                                </span>
                            </div>

                            <div className="flex flex-col justify-around items-center">
                                <AiOutlineDelete
                                    className="text-rose-600  text-xl"
                                    onClick={() => dispach(removeOrder(product.id))}
                                />

                                <span className=" text-xl">{product.quantity}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex-col text-sm m-3">
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
                <div className="m-5 text-center border-solid w-2/4 py-2  border-rose-900 bg-rose-100  text-rose-950 border-2  hover:scale-105 duration-200">
                    <Link href={"/"} className=" ">
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Orders;
