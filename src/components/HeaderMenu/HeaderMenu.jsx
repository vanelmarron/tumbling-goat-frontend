import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./HeaderMenu.scss";

import Modal from "react-modal";
Modal.setAppElement("#root");

import Login from "../../modals/Login/Login";
import SignUp from "../../modals/SignUp/SignUp";

function HeaderMenu({ setSearchItem, setSelectedFilter, handleAccountClick, isModalOpen, closeModal, isSignUp, setIsSignUp }) {

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleShopClick = () => {
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        <li
          className="header-menu__item"
          onClick={handleShopClick}
          onMouseEnter={() => setActiveMenu("shop")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          SHOP
          {location.pathname === "/products" && activeMenu === "shop" && (
            <ul className="sub-menu">
              <li
                className="sub-menu__item"
                onMouseEnter={() => setActiveSubMenu("category")}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                By Category
                {activeSubMenu === "category" && (
                  <ul className="sub-category">
                    <li
                      className="sub-category__item"
                      onClick={() => setSelectedFilter("mugs")}
                    >
                      Mugs
                    </li>
                    <li
                      className="sub-category__item"
                      onClick={() => setSelectedFilter("bowl")}
                    >
                      Bowls
                    </li>
                    <li
                      className="sub-category__item"
                      onClick={() => setSelectedFilter("Plate")}
                    >
                      Plates
                    </li>
                    <li
                      className="sub-category__item"
                      onClick={() => setSelectedFilter("Home Decor")}
                    >
                      Home Decor
                    </li>
                    <li
                      className="sub-category__item"
                      onClick={() => setSelectedFilter("Accessories")}
                    >
                      Accessories
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="sub-menu__item"
                onMouseEnter={() => setActiveSubMenu("collection")}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                By Collection
                {activeSubMenu === "collection" && (
                  <ul className="sub-collection">
                    <li
                      className="sub-collection__item"
                      onClick={() => setSelectedFilter("Begbie")}
                    >
                      Begbie{" "}
                    </li>
                    <li
                      className="sub-collection__item"
                      onClick={() => setSelectedFilter("McPherson")}
                    >
                      McPherson{" "}
                    </li>
                    <li
                      className="sub-collection__item"
                      onClick={() => setSelectedFilter("Classic")}
                    >
                      Classic{" "}
                    </li>
                    <li
                      className="sub-collection__item"
                      onClick={() => setSelectedFilter("Bloom")}
                    >
                      Bloom{" "}
                    </li>
                  </ul>
                )}
              </li>

              <li
                className="sub-menu__item"
                onClick={() => setSelectedFilter(null)}
              >
                Shop All
              </li>
            </ul>
          )}
        </li>
        <Link to="/find-us">
          <li className="header-menu__item">FIND US</li>
        </Link>
        <li className="header-menu__item" onClick={handleAccountClick}
              style={{ cursor: "pointer" }}>MY ACCOUNT</li>
      </ul>

      {location.pathname === "/products" && (
        <input
          type="text"
          placeholder="Search..."
          className="header-menu__search"
          onChange={(event) => setSearchItem(event.target.value)}
        />
      )}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
        {isSignUp ? (
          <SignUp closeModal={closeModal} />
        ) : (
          <Login onSignUpClick={() => setIsSignUp(true)} closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}

export default HeaderMenu;
