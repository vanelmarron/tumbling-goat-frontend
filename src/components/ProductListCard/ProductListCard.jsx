import { Link } from "react-router-dom";
import "./ProductListCard.scss";
import { useContext } from "react";

import { ShopContext } from "../../context/shop-context";

function ProductListCard({ product, onAddToCart  }) {

  const {addToCart} = useContext(ShopContext);

  const handleAddToCartClick = () => {
    const updatedProduct = { ...product, quantity: 1 }; 
  addToCart(updatedProduct);
  onAddToCart(updatedProduct);
  }
  

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
            <div className="product-card__button-wrapper">
              <Link
                to={`/products/${product.id}`}
                className="product-card__button"
              >
                <button className="product-card__quick-view">Quick View</button>
              </Link>
                <button className="product-card__add-to-cart" onClick={handleAddToCartClick}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card__description-wrapper">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.briefdescription}</p>
        <p className="product-card__price">CA${product.price}.00</p>
      </div>
    </li>
  );
}

export default ProductListCard;
