import { useState } from "react";
import "./ReviewCard.scss";
import axios from "axios";

import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

import editIcon from "../../assets/images/edit_24.svg";
import deleteIcon from "../../assets/images/delete_24.svg";
import starEmpty from "../../assets/images/star_24.svg";
import starFilled from "../../assets/images/star-filled_24.svg";

import EditReview from "../../modals/EditReview/EditReview";
import DeleteReview from "../../modals/DeleteReview/DeleteReview";

function ReviewCard({ review, baseURL, product, getReviews }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  const handleEditReview = async (updatedReview) => {
    try {
      const response = await axios.put(
        `${baseURL}/api/products/${product.id}/reviews/${review.reviewId}`,
        updatedReview,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        getReviews();
        setIsEditModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating review", error);
    }
  };

  const handleDeleteReview = async () => {
    try {
      const response = await axios.delete(`${baseURL}/api/products/${product.id}/reviews/${review.reviewId}`)

      if(response.status === 200) {
        console.log("Review delete successfully");
        getReviews();
        setIsDeleteModalOpen(false);
      }
    } catch(error) {
      console.error("Error deleting review", error)
    }
  }

  return (
    <>
      <li className="reviews">
        <div className="reviews__wrapper">
          <div className="reviews__user">
            <p className="reviews__name">{review.name}</p>
            <p className="reviews__location">
              {review.city}, {review.province}
            </p>
            <p className="reviews__date">
              {new Date(review.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="reviews__actions">
            <div className="reviews__rate" review-rate={review.rate}>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < review.rate ? starFilled : starEmpty}
                  alt={`${index + 1} Star`}
                  className="reviews__star"
                />
              ))}
            </div>
            <div className="reviews__update">
              <img
                src={editIcon}
                alt="Edit Review"
                className="reviews__edit"
                onClick={handleOpenEditModal}
              />
              <img
                src={deleteIcon}
                alt="Delete Review"
                className="reviews__delete"
                onClick={handleOpenDeleteModal}
              />
            </div>
          </div>
        </div>
        <div className="reviews__content">
          <p className="reviews__text">"{review.review}"</p>
        </div>
      </li>
      <ReactModal
                isOpen={isEditModalOpen}
                onRequestClose={handleCloseEditModal}
                className="modal"
              >
        <EditReview review={review} onClose={handleCloseEditModal} handleEditReview={handleEditReview} />
      </ReactModal>
      <ReactModal
                isOpen={isDeleteModalOpen}
                onRequestClose={handleCloseDeleteModal}
                className="modal"
              >
        <DeleteReview onClose={handleCloseDeleteModal} handleDeleteReview={handleDeleteReview} />
      </ReactModal>
    </>
  );
}

export default ReviewCard;
