import "./AddedToCart.scss";
import { useNavigate } from "react-router-dom";

import checkIcon from "../../assets/images/check_24.svg";

function AddedToCart({ product, onClose}) {

    const navigate = useNavigate();

  return (
    <section className="added-to-cart">
      <div className="added-to-cart__top">
        <img src={checkIcon} alt="Checkmark icon" className="added-to-cart__check"/>
        <h2 className="added-to-cart__confirm">Item added to your cart</h2>
      </div>
      <div className="added-to-cart__details">
        <img src={product.photo} alt={product.name} className="added-to-cart__image"/>
        <p className="added-to-cart__name">{product.name}</p>
        <p className="added-to-cart__description">{product.briefdescription}</p>
        <p className="added-to-cart__quantity">QTY: {product.quantity}</p>
      </div>
      <div className="added-to-cart__buttons">
              <button
                  type="button"
                  className="added-to-cart__cancel"
                  onClick={() => {
                    onClose();
                    navigate("/products");
                  }}
                >
                  Continue Shopping
                </button>
                <button type="submit" className="added-to-cart__submit" onClick={() => {
              onClose();
              navigate("/cart");
            }} >
                  View Cart
                </button>
              </div>
    </section>

  );
}

export default AddedToCart;
