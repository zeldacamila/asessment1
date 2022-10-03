import Nav from "../components/Nav";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    
    const oneProduct = async (id, state) => {
        const petition = await axios.get(`https://fakestoreapi.com/products/${id}`)
        state(petition.data)
    }
    
    useEffect(() => {
      oneProduct(id, setProduct)
    }, [id]);
 
    return (
        <>
            <Nav />
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <header className="ProductDetail-header">
            <h1>Product Detail</h1>
            </header>
            <div className="Product-maincontainer">
                {!product ? ('Loading...') : (
                    <div className="Product">
                        <div className="product-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="product-info">
                            <h3>{product.category}</h3>
                            <h2>{product.title}</h2>
                            <h4>⭐{product.rating.rate}/5 - {product.rating.count} ratings</h4>
                            <h3>Price: ${product.price}</h3>
                            <h4>{product.description}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
        
    )
}

export default ProductDetail;