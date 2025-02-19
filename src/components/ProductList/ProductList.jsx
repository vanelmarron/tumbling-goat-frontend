import "./ProductList.scss";
import ProductListCard from "../ProductListCard/ProductListCard";

import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductList({products, baseURL}) {

  return (
    <section className="product-list">
      <h2 className="product-list__title">Our Products</h2>
      <ul className="product-list__list">
      {products.map(product => (
        <ProductListCard key={product.id} product={product} baseURL={baseURL}/>
      ))}
      </ul>
    </section>
  )
}

export default ProductList
