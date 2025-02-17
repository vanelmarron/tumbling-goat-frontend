import { useState } from "react";
import "./SingleProductCard.scss";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

import lessIcon from "../../assets/images/remove_24.svg";
import moreIcon from "../../assets/images/add_24.svg";

import ReviewCard from "../ReviewCard/ReviewCard";
import AddReview from "../AddReview/AddReview";

function SingleProductCard({ product, reviews, setReviews }) {

  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleIncrease = () => {
    if (count < product.stock) {
      setCount(count+1)
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
    handleCloseModal();
  }

  return (
    <section className="details">
      <h1 className="details__title">{product?.name}</h1>

      <article className="details__wrapper">
        <div className="details__image-wrapper">
          <img
            src={product?.photo}
            alt={product?.name}
            className="details__image"
          />
          <p className="details__price">{product?.price}</p>
        </div>
        <div className="details__buttons">
          <div className="counter">
            <img src={lessIcon} alt="Minus one item" className="counter__less" onClick={handleDecrease} /> 
            <p className="counter__number-items"> {count} </p>
            <img src={moreIcon} alt="Plus one item" className="counter__more" onClick={handleIncrease} />
          </div>
          <button className="add-to-cart">Add to Cart</button>
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
        
        <div>
          <h2 className="reviews__title">Reviews</h2>
          <ul className="reviews-list">
            {reviews?.map((review) => (
              <ReviewCard key={review.userId} review={review} />
            ))}
          </ul>
        </div>
        <button className="reviews__button" onClick={handleOpenModal}>
          {reviews.length > 0 ? "Leave a Review" : "Leave the First Review"}
        </button>
        <ReactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} className="modal">
          <AddReview onSubmit={handleAddReview} onClose={handleCloseModal} />
        </ReactModal>
      </article>
    </section>
  );
}

export default SingleProductCard;
