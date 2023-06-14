"use client"
 import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { useSelector } from "react-redux";
import useWindowDimensions from "@/hooks/useWindowDimension";

const TrendingProducts = () => {
  const { width, height } = useWindowDimensions();

  const products = useSelector((state) => state.products.value);
console.log(width,height)
  const sliderPerView = (width) => {
    if (width < 700) {
      return 1;
    } else if (width < 1200) {
      return 2;
    } else if (width < 1600) {
      return 3;
    } else if (width > 1600) {
      return 4;
    }
  };
  console.log(sliderPerView(width))
  return (
    <div className="bg-gray-200 mt-10 ">
      <h1 className="text-gray-800 italic font-bold sans text-2xl px-10  mb-14 ml-10 sm:ml-40 lg:ml-96">
        Trending Products
      </h1>
      <Swiper
        className="w-4/6 my-10"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={40}
        slidesPerView={sliderPerView(width)}
        speed={300}
        autoplay={{ delay: 4000 }}
      >
        |
        <div>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
