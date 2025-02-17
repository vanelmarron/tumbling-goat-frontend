import "./AddReview.scss";
import ReactModal from "react-modal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import starFilled from "../../assets/images/star-filled_24.svg";
import starEmpty from "../../assets/images/star_24.svg";

function AddReview({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      userId: uuidv4(),
      name,
      city,
      province,
      review: reviewText,
      rate: rating,
    };
    onSubmit(newReview);
    onClose();
  };

  return (
    <section className="add-review">
      <h2 className="add-review__title">Let us know what you think</h2>
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="add-review__details">
          <div className="add-review__top">
            <label htmlFor="username" className="add-review__label">
              Name:
            </label>
            <input
              type="text"
              id="username"
              className="add-review__input"
              name="username"
              placeholder="Full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="city" className="add-review__label">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="add-review__input"
              placeholder="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            />
            <label htmlFor="province" className="add-review__label">
              Province:{" "}
            </label>
            <input
              type="text"
              id="province"
              className="add-review__input"
              name="province"
              placeholder="Province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              required
            />
          </div>
          <div className="add-review__bottom">
            <label htmlFor="review" className="add-review__label">
              Review:{" "}
            </label>
            <textarea
              className="add-review__textarea"
              name="review"
              id="review"
              placeholder="Write us a review"
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              required
            ></textarea>
            <div className="add-review__rating">
              <label className="add-review__label">Rate:</label>
              <div className="add-review__stars">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={index < rating ? starFilled : starEmpty}
                    alt={`${index + 1} Star`}
                    className="reviews__star"
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="add-review__buttons">
        <button
            type="button"
            className="add-review__cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="add-review__submit">
            Submit Review
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddReview;
