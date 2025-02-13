import React from 'react'
import "./HeaderMenu.scss"

function HeaderMenu() {
  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">SHOP</li>
        <li className="header-menu__item">OUR STORY</li>
        <li className="header-menu__item">FIND US</li>
      </ul>
      <input type="text" placeholder="Search..." className="header-menu__search"/>
    </div>
  )
}

export default HeaderMenu
