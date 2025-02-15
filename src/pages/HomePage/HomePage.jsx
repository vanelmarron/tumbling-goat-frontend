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
  const [searchItem, setSearchItem] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filteredProducts = products.filter((product) => {
    if (searchItem) {
      return product.name.toLowerCase().includes(searchItem.toLowerCase());
    }
  
    if (selectedFilter) {
        return (
          product.category?.trim().toLowerCase() === selectedFilter.trim().toLowerCase() ||
          product.collection?.trim().toLowerCase() === selectedFilter.trim().toLowerCase()
      );
    }
  
    return true; 
  });

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
      <Header setSearchItem={setSearchItem} setSelectedFilter={setSelectedFilter} products={products} baseURL={baseURL} />
      <Hero />
      <ProductList products={filteredProducts} baseURL={baseURL}/>
    </main>
  )
}

export default HomePage;
