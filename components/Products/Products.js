'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

    const [product,setProduct]= useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
  });


  return <div className=' flex gap-10 px-10 flex-wrap justify-center'>

    {product.map((product)=>{ <ProductCard key={product.id} product={product}/>})}
  </div>;
};

export default Products;
