import React, { useState } from "react";
import "./HeaderMenu.scss";

function HeaderMenu( {setSearchItem, setSelectedFilter}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        {/* Main Menu Item */}
        <li
          className="header-menu__item"
          onMouseEnter={() => setActiveMenu("shop")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          SHOP
          {activeMenu === "shop" && (
            <ul className="sub-menu">
              {/* Sub-Menu Item */}
              <li
                className="sub-menu__item"
                onMouseEnter={() => setActiveSubMenu("category")}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                By Category
                {activeSubMenu === "category" && (
                  <ul className="sub-category">
                    <li className="sub-category__item" onClick={() => setSelectedFilter("mugs")}>Mugs</li>
                    <li className="sub-category__item" onClick={() => setSelectedFilter("bowl")}>Bowls</li>
                    <li className="sub-category__item" onClick={() => setSelectedFilter("Plate")}>Plates</li>
                    <li className="sub-category__item" onClick={() => setSelectedFilter("Home Decor")}>Home Decor</li>
                    <li className="sub-category__item" onClick={() => setSelectedFilter("Accessories")}>Accessories</li>
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
                    <li className="sub-collection__item" onClick={() => setSelectedFilter("Begbie")}>Begbie </li>
                    <li className="sub-collection__item" onClick={() => setSelectedFilter("McPherson")}>McPherson </li>
                    <li className="sub-collection__item" onClick={() => setSelectedFilter("Classic")}>Classic </li>
                    <li className="sub-collection__item" onClick={() => setSelectedFilter("Bloom")}>Bloom </li>
                  </ul>
                )}
              </li>

              <li className="sub-menu__item" onClick={() => setSelectedFilter("")}>Shop All</li>
            </ul>
          )}
        </li>

        <li className="header-menu__item">OUR STORY</li>
        <li className="header-menu__item">FIND US</li>
      </ul>

      <input type="text" placeholder="Search..." className="header-menu__search" onChange={(event) => setSearchItem(event.target.value)}/>
    </div>
  );
}

export default HeaderMenu;
