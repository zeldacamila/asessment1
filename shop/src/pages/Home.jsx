import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";

function Home() {
  const [dataProducts, setDataProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
    .then(({ data }) => {
      setDataProducts(data)
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

    return (
      <>
        <Nav />
        <Link to="/About">About</Link>
        <header className="Product-header">
          <h1>Products</h1>
        </header>
        <div className="Products">
          {loading ? <p>Loading...</p> : dataProducts.map((item) => {
            return (
              <ProductCard key={item.id} product={item} />
            );
          })}
        </div>
      </>
    );
  }
  
  export default Home;