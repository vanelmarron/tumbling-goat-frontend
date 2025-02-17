import "./ProductDetails.scss";

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

import SingleProductCard from '../../components/SingleProductCard/SingleProductCard';

function ProductDetails() {

  const baseURL= import.meta.env.VITE_API_URL;
  const { id : itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/products/${itemId}`);
        setProduct(response.data)
      } catch(error) {
        console.log("Error fetching the products details: ", error)
      }
    }

    const getReviews = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/products/${itemId}/reviews`);
        setReviews(response.data)
      } catch(error) {
        console.log("Error fetching product reviews", error);
      }
    }
    getProductDetails();
    getReviews();
  }, [itemId])

  return (
    <div>
      <SingleProductCard product={product} reviews={reviews} setReviews={setReviews} />
    </div>
  )
}

export default ProductDetails;
