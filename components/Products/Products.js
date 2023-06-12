"use client";
import { React} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {  useSelector } from "react-redux";


const Products = () => {

  const products = useSelector(state => state.products.value);

  return (
    <div className=" flex gap-20 p-10 flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
