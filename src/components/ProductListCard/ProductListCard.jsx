import {Link, Navigate } from "react-router-dom";
import "./ProductListCard.scss";

import randomImage from "../../assets/images/chevre_1.png";

function ProductListCard({ product, baseURL }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.photo}
          alt={product.briefdescription}
          className="product-card__image"
        />
        <p className="product-card__price--mobile">{product.price}</p>
      </div>
      <div className="product-card__description-wrapper">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.briefdescription}</p>
        <p className="product-card__price--tablet">{product.price}</p>
      </div>
      <div className="product-card__bottom">
        {/* <div className="product-card__counter"> */}
          {/* <button className="product-card__less-button"> - </button>
          <p className="product-card__number-items"> 0 </p>
          <button className="product-card__more-button"> + </button>
        </div> */}
        <Link to={`/products/${product.id}`}>
        <button className="product-card__more-details">More Details</button>
        </Link>
        <button className="product-card__add-to-cart">Add to Cart</button>
      </div>
    </article>
  );
}

export default ProductListCard;
