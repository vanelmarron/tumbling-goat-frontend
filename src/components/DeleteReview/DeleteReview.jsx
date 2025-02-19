import "./DeleteReview.scss";

function DeleteReview({ onClose, handleDeleteReview }) {

  return (
    <section className="delete-review">
      <h2 className="delete-review__title">Delete Review?</h2>
      <p className="delete-review__text">Are you sure you want to delete this review?</p>
      <div className="delete-review__buttons">
              <button
                  type="button"
                  className="delete-review__cancel"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="delete-review__submit" onClick={handleDeleteReview}>
                  Delete Review
                </button>
              </div>
    </section>
  )
}

export default DeleteReview
