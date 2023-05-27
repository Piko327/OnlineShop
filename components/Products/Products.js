'use client'
import {React, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/util/api/api";


const Products = ({category}) => {
 
    const [products,setProducts]= useState([])
  useEffect(()=>{
  getProducts(category,setProducts)
  },[category]);


  return <div className=' flex gap-10 px-10 flex-wrap justify-center'>

    {products.map((product)=><ProductCard key={product.id} product={product}/>)}
  </div>;
};

export default Products;
