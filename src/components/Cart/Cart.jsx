import "./Cart.scss";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

const baseURL = import.meta.env.VITE_API_URL;

function Cart() {

  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching all products : ", error);
      }
    };
    getAllProducts();
  }, []);

  const subAmount = Object.values(cartItems).reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const isCartEmpty = Object.keys(cartItems).length === 0;

  const shipping = isCartEmpty ? 0 : subAmount > 150 ? 0 : 20;

  const grandTotal = subAmount + shipping;

  return (
    <section className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      {isCartEmpty ? (
        <div className="cart__empty">
          <p>Your cart is currently empty.</p>
          <button className="cart__continue" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
      <div className="cart__header">
        <p className="cart__header-item">Item</p>
        <p className="cart__header-price">Price</p>
        <p className="cart__header-qty">Quantity</p>
        <p className="cart__header-total">Total</p>
      </div>
      <ul className="cart__list">
        {Object.values(cartItems).map((product) => (
          <CartItem
            key={product.id}
            product={product}
            quantity={product.quantity}
          />
        ))}
      </ul>
      <div className="checkout">
        <div className="checkout__info">
          <ul className="checkout__left">
            <li className="checkout__name">Subtotal:</li>
            <li className="checkout__name">Sales Tax:</li>
            <li className="checkout__name">Shipping:</li>
            <li className="checkout__name">Coupon:</li>
            <li className="checkout__name">Grand Total:</li>
          </ul>
          <ul className="checkout__amount">
            <li className="checkout__sub-amount">${subAmount.toFixed(2)}</li>
            <li className="checkout__sales-tax checkout__sales-tax--mobile">
              --
            </li>
            <li className="checkout__sales-tax checkout__sales-tax--tablet">
              Calculated at Checkout
            </li>
            <li className="checkout__shipping">
              {shipping === 0 ? "Free Shipping" : `CA$${shipping.toFixed(2)}`}
            </li>
            <li className="checkout__coupon">Add Coupon</li>
            <li className="checkout__grand-total">${grandTotal.toFixed(2)}</li>
          </ul>
        </div>
        <div className="checkout__buttons">
          <button
            type="button"
            className="checkout__cancel"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
          <button type="submit" className="checkout__submit">
            Checkout
          </button>
        </div>
      </div>
      </>
      )}
    </section>
  );
}

export default Cart;
