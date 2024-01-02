"use client";
import Baner from "@/components/Baner/Baner";
import TrendingProducts from "@/components/Products/TrendingProducts";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "./redux/features/products";
import FavouriteProducts from "@/components/Products/FavouriteProducts";
import MotionProvider from "@/providers/motionProvider";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((json) => dispatch(addProducts(json)));
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Baner src="/asset/BanerImg.jpg" />
      <MotionProvider>
        <div>
          <h1 className="text-2xl   lg:text-4xl p-2  text-gray-300 border-2 font-bold relative  text-center z-30 top-20 ms:top-40 mx-6 ">
            ORDER NOW FOR THE LATEST TRENDS
          </h1>

          <Link
            href="/Shop"
            className=" text-2xl lg:text-3xl px-3 rounded-xl   border-1  bg-rose-950  italic p-2  text-gray-300 border-2 relative  z-30 top-36  ms:top-60 left-[30vw]  sm:left-[45vw] sm:top-[30vh]  "
          >
            Shop now
          </Link>
        </div>

        <div className="mt-72 md:t-80">
          <h2 className="text-center bg-slate-200 rounded-xl mb-10 text-rose-950  px-10 py-2 m-3 text-xl  md:text-2xl  font-bold">
            T-Shop Chronicle: Your Gateway to Fashion Inspiration and Shopping
            Delights.
          </h2>
          <FavouriteProducts />

          <TrendingProducts />
        </div>
      </MotionProvider>
    </>
  );
}
