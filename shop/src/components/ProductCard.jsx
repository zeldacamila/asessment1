import React from "react";
const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <h3>{product.id}</h3>
            <img src={product.image} alt={`pj ${product.name}`} loading="lazy" />
        </div>
    )
}

export default ProductCard;