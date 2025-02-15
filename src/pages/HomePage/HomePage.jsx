import React from 'react'
import "./HomePage.scss"
import Header from "../../components/Header/Header"
import Hero from '../../components/Hero/Hero'
import ProductList from "../../components/ProductList/ProductList"

import { useState, useEffect } from 'react';
import axios from "axios";

const baseURL= import.meta.env.VITE_API_URL;

function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getAllProducts = async () => {
          try {
              const response = await axios.get(`${baseURL}/api/products`)
              setProducts(response.data);
          } catch(error) {
              console.log("Error fetching all products : ", error)
          }
      }
      getAllProducts();
  }, [])


  return (
    <main className="main">
      <Header products={products} baseURL={baseURL} />
      <Hero />
      <ProductList products={products} baseURL={baseURL}/>
    </main>
  )
}

export default HomePage;
