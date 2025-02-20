import "./StockModal.scss"
import React from "react";
import { Link } from "react-router-dom";

function StockModal({product, handleCloseStockModal}) {
  return (
    <div className="stock">
      <h2 className="stock__title">Limited Stock Available</h2>
      <h3>Only {product.stock} pieces left!</h3>
      <p className="stock__text">
    Need more? We'd be delighted to craft
        additional pieces just for you.
      </p>
      <div className="stock__buttons">
      <Link to="mailto:tumblinggoatpottery@gmail.com">
      <button className="stock__contact">Contact Us</button>
      </Link>
      <button className="stock__close"
      onClick={handleCloseStockModal}>Close</button>
      </div>
    </div>
  );
}

export default StockModal;
