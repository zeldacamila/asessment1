import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    
    const oneProduct = async (id, state) => {
        const petition = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(petition.data)
    }
    
    useEffect(() => {
      oneProduct(id, setProduct)
    }, []);

    return (
        <>
            <Nav />
            <h1>Product Detail</h1>
            <h2>Producto con el id {id}</h2>
            {product ? (
                <div className="Product">
                    <h2>Producto con el id {id}</h2>
                     <img src={product.image} alt="" /> 
                </div>
            ) : ('no hay producto')}
        </>
        
    )
}

export default ProductDetail;