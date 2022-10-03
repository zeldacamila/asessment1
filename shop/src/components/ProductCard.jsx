import React from "react";
import Button from "./Button";
import Countdown from "react-countdown";

const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <img src={product.image} loading="lazy" alt=""/>
            <h2>{product.title}</h2>
            <div className="timer-button">
                <Countdown 
                    date={Date.now() + Math.floor(Math.random() * 3 * 60 * 1000)}
                    renderer={({ hours, minutes, seconds, completed }) => {
                        if (!completed) {
                            return (
                                <>
                                    <span>
                                        {hours}:{minutes}:{seconds}
                                    </span>
                                    <Button
                                        buttonName="Go to Detail"
                                        id={product.id} />
                                </>
                            )
                        } else {
                            return (
                                <span>
                                    {hours}:{minutes}:{seconds}
                                </span>
                            );
                        }
                    }} />
            </div>
        </div>
    )
}

export default ProductCard;

