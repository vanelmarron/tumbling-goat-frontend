import React from "react";
import "./ReviewCard.scss";
import editIcon from "../../assets/images/edit_24.svg";
import deleteIcon from "../../assets/images/delete_24.svg";
import starEmpty from "../../assets/images/star_24.svg";
import starFilled from "../../assets/images/star-filled_24.svg";


function ReviewCard({ review }) {

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
              <img src={editIcon} alt="Edit Review" className="reviews__edit" />
              <img
                src={deleteIcon}
                alt="Delete Review"
                className="reviews__delete"
              />
            </div>
          </div>
        </div>
        <div className="reviews__content">
          <p className="reviews__text">"{review.review}"</p>
        </div>
    </li>
    </>
  );
}

export default ReviewCard;
