import {Link } from "react-router-dom";
import "./ProductListCard.scss";


function ProductListCard({ product }) {
  return (
    <li className="product-card">
      <div className="product-card__flip-container">
        <div className="product-card__flipper">
          <div className="product-card__front">
            <img
              src={product.photo}
              alt={product.name}
              className="product-card__image"
            />
          </div>
          <div className="product-card__back">
          <img
              src={product.photo}
              alt={product.name}
              className="product-card__back-image"
            />
             <div className="product-card__overlay"></div>
          <Link to={`/products/${product.id}`} className="product-card__button">
            <p className="product-card__back-text">Quick View</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="product-card__description-wrapper">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.briefdescription}</p>
        <p className="product-card__price">CA{product.price}.00</p>
      </div>
    </li>
  );
}

export default ProductListCard;
