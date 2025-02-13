import "./Header.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import { useState } from "react";
import { Link } from "react-router-dom";

import menuIcon from "../../assets/images/menu_24.svg";
import tumblingGoatLogo from "../../assets/logos/TumblingGoat_logo_orange.png";
import shoppingCart from "../../assets/images/cart_24.svg";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="header__menu"
            onClick={toggleMenu}
          />
          <Link to="/">
            <img
              src={tumblingGoatLogo}
              alt="Tumbling Goat Logo"
              className="header__logo"
            />
          </Link>
          <img
            src={shoppingCart}
            alt="Access your cart"
            className="header__cart--mobile"
          />
          <div className="header__left">
          <img
            src={tumblingGoatLogo}
            alt="Tumbling Goat Logo"
            className="header__logo-tablet"
          />
          <div className="header__options">
            <ul className="header__list">
              <li className="header__item">SHOP</li>
              <li className="header__item">OUR STORY</li>
              <li className="header__item">FIND US</li>
            </ul>
            </div>
            </div>
            <div className="header__right">
            <input
              type="text"
              placeholder="Search..."
              className="header__search"
            />
          
          <div className="header__cart-wrapper">
            <p className="header__cart-text">Cart</p>
          <img
            src={shoppingCart}
            alt="Access your cart"
            className="header__cart--tablet"
          />
          </div>
          </div>
        </div>
        {menuIsOpen && <HeaderMenu />}
      </header>
    </>
  );
}

export default Header;
