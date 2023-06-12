"use client";
import Baner from "@/components/Baner/Baner";
import TrendingProducts from "@/components/Products/TrendingProducts";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/features/products";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => dispatch(addProducts(json)));
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <div className="mb-[70vh]">
        <Baner />
        <h1 className="text-3xl   sm:text-5xl p-2  text-gray-300 border-2 font-bold relative  text-center z-30 top-40 mx-6 lg:text-6xl">
          ORDER NOW FOR THE LATEST TRENDS
        </h1>
        <Link
          href="/Shop"
          className=" text-3xl md:text-4xl px-3 rounded-xl  lg:text-5xl  border-1  bg-rose-950  italic p-2  text-gray-300 border-2 relative  z-30 top-60  left-[30vw]  sm:left-[45vw] sm:top-[30vh]  "
        >
          Shop now
        </Link>
      </div>
      <div className="">
        <TrendingProducts />
      </div>
    </div>
  );
}
