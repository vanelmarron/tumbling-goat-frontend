import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import HeaderMenu from "../HeaderMenu/HeaderMenu"

import menuIcon from "../../assets/images/menu_24.svg";
import tumblingGoatLogo from "../../assets/logos/TumblingGoat_logo_orange.png";
import shoppingCart from "../../assets/images/cart_24.svg";

function Header({ setSearchItem, setSelectedFilter }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleSubMenu = (subMenu) => {
    setActiveSubMenu((prev) => (prev === subMenu ? null : subMenu));
  };


  return (
    <header className="header">
      <div className="header__top">
        <img src={menuIcon} alt="Menu Icon" className="header__menu" onClick={toggleMobileMenu} />
        <Link to="/">
          <img
            src={tumblingGoatLogo}
            alt="Tumbling Goat Logo"
            className="header__logo"
          />
        </Link>
        <img src={shoppingCart} alt="Cart" className="header__cart--mobile" />

        <div className="header__left">
          <img
            src={tumblingGoatLogo}
            alt="Tumbling Goat Logo"
            className="header__logo-tablet"
          />
          <div className="header__options">
            <ul className="header__list">
              <li
                className="header__item"
                onMouseEnter={() => toggleMenu("SHOP")}
                onMouseLeave={() => toggleMenu(null)}
              >
                SHOP
                {activeMenu === "SHOP" && (
                  <ul className="header-sub">
                    <li
                      className="header-sub__item"
                      onMouseEnter={() => toggleSubMenu("CATEGORY")}
                    >
                      By Category
                      {activeSubMenu === "CATEGORY" && (
                        <ul className="header-category">
                          <li className="header-category__item" onClick={() => setSelectedFilter("mugs")}>Mugs</li>
                          <li className="header-category__item" onClick={() => setSelectedFilter("bowl")}>Bowls</li>
                          <li className="header-category__item" onClick={() => setSelectedFilter("Plate")}>Plates</li>
                          <li className="header-category__item" onClick={() => setSelectedFilter("Home Decor")}>Home Decor</li>
                          <li className="header-category__item" onClick={() => setSelectedFilter("Accessories")}>Accessories</li>
                        </ul>
                      )}
                    </li>
                    <li
                      className="header-sub__item"
                      onMouseEnter={() => toggleSubMenu("COLLECTION")}
                    >
                      By Collection
                      {activeSubMenu === "COLLECTION" && (
                        <ul className="header-collection">
                          <li className="header-collection__item" onClick={() => setSelectedFilter("Begbie")}>
                            Begbie
                          </li>
                          <li className="header-collection__item" onClick={() => setSelectedFilter("McPherson")}>
                            McPherson
                          </li>
                          <li className="header-collection__item" onClick={() => setSelectedFilter("Classic")}>
                            Classic
                          </li>
                          <li className="header-collection__item" onClick={() => setSelectedFilter("Bloom")}>
                            Bloom
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="header-sub__item" onClick={() => setSelectedFilter(null)}>Shop All</li>
                  </ul>
                )}
              </li>
              
              <li className="header__item">FIND US</li>
            </ul>
          </div>
        </div>

        <div className="header__right">
          <input
            type="text"
            placeholder="Search..."
            className="header__search"
            onChange={(event) => setSearchItem(event.target.value)}
          />
          <div className="header__cart-wrapper">
            <p className="header__cart-text">Cart</p>
            <img
              src={shoppingCart}
              alt="Cart"
              className="header__cart--tablet"
            />
          </div>
        </div>
      </div>
      {menuIsOpen && <HeaderMenu setSearchItem={setSearchItem} setSelectedFilter={setSelectedFilter}/>}
    </header>
  );
}

export default Header;
