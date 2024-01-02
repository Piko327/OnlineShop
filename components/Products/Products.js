"use client";
import { React } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const Products = ({ category }) => {
    const products = useSelector((state) => state.products.value);

    const filteredProducts = (products, category) => {
        if (category == "All") return products;
        
        else return products.filter((p) => p.category == category);
    };

    return (
        <div className=" flex gap-20 p-10 flex-wrap justify-center">
            {filteredProducts(products, category).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
