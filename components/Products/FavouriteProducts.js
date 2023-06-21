"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { useSelector } from "react-redux";
import useWindowDimensions from "@/hooks/useWindowDimension";

const FavouriteProducts = () => {
  const { width, height } = useWindowDimensions();

  const products = useSelector((state) => state.products.value);
  const sliderPerView = (width) => {
    if (width < 700) {
      return 1;
    } else if (width < 1200) {
      return 2;
    } else if (width < 1600) {
      return 3;
    } else if (width > 1600) {
      return 4;
    } else {
      return 2;
    }
  };

  return (
    <div className="bg-rose-950 py-5">
      <h1 className="text-gray-200 italic font-bold sans text-2xl px-10   ml-14 sm:ml-40 lg:ml-96">
        Our Favourites
      </h1>
      <p className="text-gray-400 italic font-semibold sans  px-10   ml-14 sm:ml-40 lg:ml-96">
        Crème de la Crème: Our Top Picks and Must-Haves.
      </p>

      <Swiper
        className="w-4/6 my-10"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={40}
        slidesPerView={sliderPerView(width)}
        speed={400}
        autoplay={{ delay: 3000 }}
      >
        <div>
          {products.map((product) => (
            <SwiperSlide className="p-4" key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FavouriteProducts;
