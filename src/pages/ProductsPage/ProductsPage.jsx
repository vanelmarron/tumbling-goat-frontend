import React from 'react';
import "./ProductsPage.scss";
import Hero from '../../components/Hero/Hero';
import ProductList from "../../components/ProductList/ProductList";

import { useState, useEffect } from 'react';
import axios from "axios";

const baseURL= import.meta.env.VITE_API_URL;

function ProductsPage({ searchItem, selectedFilter }) {

  const [products, setProducts] = useState([]);

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
              console.error("Error fetching all products : ", error)
          }
      }
      getAllProducts();
  }, [])

  return (
    <main className="products-page">
      <Hero />
      <ProductList products={filteredProducts} baseURL={baseURL}/>
    </main>
  )
}

export default ProductsPage;
