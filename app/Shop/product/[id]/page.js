
import DetailCard from "@/components/Products/DetailCard";
import React from "react";

const page = async (props) => {


  const productData = await fetch(
    `https://fakestoreapi.com/products/${props.params.id}`
  ).then((res) => res.json());

  

  return (
  <DetailCard product={productData}/>
  );
};

export default page;
