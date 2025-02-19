import "./EditReview.scss";
import { useState } from "react";

import starEmpty from "../../assets/images/star_24.svg";
import starFilled from "../../assets/images/star-filled_24.svg";

function EditReview({ review, onClose, handleEditReview }) {
  const [updatedReview, setUpdatedReview] = useState({
    name: review.name,
    city: review.city,
    province: review.province,
    review: review.review,
    rate: review.rate,
  });

  const [rating, setRating] = useState(review.rate);

  const handleChange = (event) => {
    setUpdatedReview({
      ...updatedReview,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditReview(updatedReview);
  };

  return (
    <section className="edit-review">
      <h2 className="edit-review__title">Edit your review</h2>
      <form className="edit-review__form" onSubmit={handleSubmit}>
        <div className="edit-review__details">
          <div className="edit-review__top">
            <label htmlFor="username" className="edit-review__label">
              Name:
            </label>
            <input
              type="text"
              id="username"
              className="edit-review__input"
              name="name"
              placeholder={review.name}
              value={updatedReview.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="city" className="edit-review__label">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="edit-review__input"
              placeholder={review.city}
              value={updatedReview.city}
              onChange={handleChange}
              required
            />
            <label htmlFor="province" className="edit-review__label">
              Province:
            </label>
            <input
              type="text"
              id="province"
              className="edit-review__input"
              name="province"
              placeholder={review.province}
              value={updatedReview.province}
              onChange={handleChange}
              required
            />
          </div>
          <div className="edit-review__bottom">
            <label htmlFor="review" className="edit-review__label">
              Review:
            </label>
            <textarea
              className="edit-review__textarea"
              name="review"
              id="review"
              placeholder={review.review}
              value={updatedReview.review}
              onChange={handleChange}
              required
            ></textarea>
            <div className="edit-review__rating">
              <label className="edit-review__label">Rate:</label>
              <div className="edit-review__stars">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={index < rating ? starFilled : starEmpty}
                    alt={`${index + 1} Star`}
                    className="reviews__star"
                    onClick={() => {
                      setRating(index + 1);
                      setUpdatedReview({ ...updatedReview, rate: index + 1 });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="edit-review__buttons">
          <button
            type="button"
            className="edit-review__cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="edit-review__submit">
            Submit Update
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditReview;
