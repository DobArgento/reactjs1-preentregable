import React from 'react';
import CartWidget from '../cartwidget/cartwidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="Logo de tu tienda" className="logo" />
        <h1>Tienda Online</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;