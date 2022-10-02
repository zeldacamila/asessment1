import React from "react";
import Button from "./Button";

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <img src={product.image} loading="lazy" alt=""/>
            <h2>{product.title}</h2>
            <Button 
                buttonName= "Go to Detail"
                id={product.id}
            />
        </div>
    )
}

export default ProductCard;