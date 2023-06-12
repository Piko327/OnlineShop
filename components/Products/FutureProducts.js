"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowSize from "use-window-size-v2";
import ProductCard from "../ProductCard/ProductCard";
import {  Navigation, Pagination, Scrollbar } from "swiper";
import { useSelector } from "react-redux";
const FutureProducts = () => {

  const { width} = useWindowSize();
const products =useSelector(state=>state.products.value)
  return (
    <div>
    <h1 className="text-gray-800 italic text-3xl px-10 text-center mb-14">FutureProducts</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={width>800?3:1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
 
      >
        |
        <div>
          {products.map((product) => (
            <SwiperSlide className="px-10" virtualIndex={product.id}>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FutureProducts;
