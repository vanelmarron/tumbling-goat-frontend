import { useState, useEffect } from "react";
import "./SingleProductCard.scss";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import { useParams } from "react-router-dom";
import axios from "axios";

import lessIcon from "../../assets/images/remove_24.svg";
import moreIcon from "../../assets/images/add_24.svg";

import ReviewCard from "../ReviewCard/ReviewCard";
import AddReview from "../AddReview/AddReview";
import StockModal from "../StockModal/StockModal";

function SingleProductCard() {
  const baseURL = import.meta.env.VITE_API_URL;
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStockModalOpen, setIsStockModalOpen] = useState(false);

  const getReviews = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/products/${itemId}/reviews`
      );
      if (response.data) {
        setReviews(response.data.reverse());
      }
    } catch (error) {
      console.log("Error fetching product reviews", error);
    }
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/products/${itemId}`);
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching the products details: ", error);
      }
    };
    if (itemId) {
      getProductDetails();
      getReviews();
    }
  }, [itemId]);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < product.stock) {
      setCount(count + 1);
      if (count + 1 === product.stock) {
        setIsStockModalOpen(true);
      }
    }
  };

  const handleCloseStockModal = () => {
    setIsStockModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
    handleCloseModal();
  };

  return (
    <section className="details">
      <div className="details__top">
        <h1 className="details__title">{product?.name}</h1>
        <p className="details__price">${product?.price}.00</p>
      </div>
      <article className="details__wrapper">
        <div className="details__image-wrapper">
          <img
            src={product?.photo}
            alt={product?.name}
            className="details__image"
          />
          <div className="details__content-wrapper">
            <div className="details__buttons">
              <div className="counter">
                <img
                  src={lessIcon}
                  alt="Minus one item"
                  className={`counter__less ${count === 0 ? "counter__less--disabled": ""}`}
                  onClick={count > 0 ? handleDecrease : undefined}
                />
                <p className="counter__number-items"> {count} </p>
                <img
                  src={moreIcon}
                  alt="Plus one item"
                  className={`counter__more ${product && count >= product.stock ? "counter__more--disabled" : ""}`}
                  onClick={product && count < product.stock ? handleIncrease : undefined}
                />
              </div>
              <button className={`add-to-cart ${product?.stock === 0 ? "add-to-cart--disabled" : ""}`} disabled={product?.stock===0}>Add to Cart</button>
            </div>
            <div className="description">
              <p className="description__text">{product?.fulldescription}</p>
              <div className="description-care">
                <h3 className="description__care-title">Care Tips:</h3>
                <ul className="description__care-list">
                  {product?.caretips?.map((tip, index) => (
                    <li key={index} className="description__care-item">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="reviews__title">Reviews</h2>
          <ul className="reviews-list">
            {reviews?.map((review) => (
              <ReviewCard
                key={review.userId}
                review={review}
                baseURL={baseURL}
                product={product}
                getReviews={getReviews}
              />
            ))}
          </ul>
        </div>
        <button className="reviews__button" onClick={handleOpenModal}>
          {reviews.length > 0 ? "Leave a Review" : "Leave the First Review"}
        </button>
        <ReactModal
          isOpen={isStockModalOpen}
          onRequestClose={handleCloseStockModal}
          className="modal"
        >
          <StockModal
            product={product}
            handleCloseStockModal={handleCloseStockModal}
          />
        </ReactModal>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className="modal"
        >
          <AddReview
            onSubmit={handleAddReview}
            onClose={handleCloseModal}
            baseURL={baseURL}
            product={product}
            getReviews={getReviews}
          />
        </ReactModal>
      </article>
    </section>
  );
}

export default SingleProductCard;
