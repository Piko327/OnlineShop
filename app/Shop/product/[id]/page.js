
'use client'
import DetailCard from "@/components/DetailCard/DetailCard";
import TrendingProducts from "@/components/Products/TrendingProducts";
import React from "react";
import { useSelector } from "react-redux";

const page = async (props) => {
    const product = useSelector(state => state.products.value)
        .filter(p => p.id == props.params.id)[0]

    return (<div>
        <DetailCard product={product} />

        <TrendingProducts />
    </div>

    );
};

export default page;
