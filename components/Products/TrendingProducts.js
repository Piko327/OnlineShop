"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import useWindowSize from "use-window-size-v2";
import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
const FutureProducts = () => {
  const { width } = useWindowSize();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

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

  return (
    <div className="bg-gray-200">
      <h1 className="text-gray-800 italic font-bold sans text-3xl px-10  mb-14 ml-10 sm:ml-40 lg:ml-96">
        Trending Products
      </h1>
      <Swiper
        className="w-4/6 my-10"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={40}
        slidesPerView={sliderPerView(width)}
        speed={100}
        autoplay={{ delay: 2000}}
       >
        |
        <div>
          {products.map((product) => (
            <SwiperSlide virtualIndex={product.id}>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FutureProducts;
