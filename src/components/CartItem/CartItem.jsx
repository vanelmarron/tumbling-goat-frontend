import "./CartItem.scss";
import { useContext } from "react";

import deleteIcon from "../../assets/images/delete_24.svg";
import lessIcon from "../../assets/images/remove_24.svg";
import moreIcon from "../../assets/images/add_24.svg";

import { ShopContext } from "../../context/shop-context";

function CartItem({ product, quantity }) {
  const { addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <li className="shop-item">
      <div className="shop-item__image-wrapper">
        <img
          src={product.photo}
          alt="Product Photo"
          className="shop-item__image"
        />
      </div>
      <div className="shop-item__details">
        <h3 className="shop-item__name">{product.name}</h3>
        <div className="shop-item__price-wrap">
        <p className="shop-item__label">Price</p>
        <p className="shop-item__price">CA{product.price}.00</p>
        </div>
        <div className="shop-item__counter">
          <img
            src={lessIcon}
            alt="Minus one item"
            className={`shop-item__less ${
              quantity === 1 ? "shop-item__less--disabled" : ""
            }`}
            onClick={() => quantity > 1 && removeFromCart(product.id)}
          />
          <p className="shop-item__number-items"> {quantity} </p>
          <img
            src={moreIcon}
            alt="Plus one item"
            className={`shop-item__more ${
              product && quantity >= product.stock
                ? "shop-item__more--disabled"
                : ""
            }`}
            onClick={() => quantity < product.stock && addToCart(product)}
          />
        </div>
        <div className="shop-item__total-wrap">
        <p className="shop-item__label">Total</p>
        <p className="shop-item__total">
          CA${(product.price * quantity).toFixed(2)}
        </p>
        </div>
        </div>
        <div>
        <img
          src={deleteIcon}
          alt="Remove item from cart"
          className="shop-item__delete"
          onClick={() => removeFromCart(product.id, true)}
        />
        </div>
      
    </li>
  );
}

export default CartItem;
