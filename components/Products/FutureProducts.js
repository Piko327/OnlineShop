"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowSize from "use-window-size-v2";
import ProductCard from "./ProductCard";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
const FutureProducts = () => {

  const { width} = useWindowSize();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
    <h1 className="text-gray-800 italic text-3xl px-10 text-center mb-14">FutureProducts</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={width>800?3:1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
