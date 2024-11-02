import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Стили навигации

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TradeApp</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact="true" activeclassname="active">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/coins" activeclassname="active">
            Coins
          </NavLink>
        </li>
        <li>
          <NavLink to="/subscription" activeclassname="active">
            Подписка
          </NavLink>
        </li>
        <li>
          <NavLink to="/channel" activeclassname="active">
            Канал
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            О боте
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" activeclassname="active">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
