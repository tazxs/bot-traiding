import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Стили навигации
import { FaBars, FaTimes } from 'react-icons/fa'; // Иконки для меню

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">TradeApp</div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuActive ? 'navbar-links active' : 'navbar-links'}>
        <li>
          <NavLink to="/" exact="true" activeclassname="active" onClick={closeMenu}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/coins" activeclassname="active" onClick={closeMenu}>
            Coins
          </NavLink>
        </li>
        <li>
          <NavLink to="/subscription" activeclassname="active" onClick={closeMenu}>
            Подписка
          </NavLink>
        </li>
        <li>
          <NavLink to="/channel" activeclassname="active" onClick={closeMenu}>
            Канал
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active" onClick={closeMenu}>
            О боте
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" activeclassname="active" onClick={closeMenu}>
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
