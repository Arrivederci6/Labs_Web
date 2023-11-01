import React from "react";
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="header__navbar">
            <ul className="header__items-list">
                <li className="header__item">
                    <a href="#" className="header__link link">Home</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__link link">Catalog</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__link link">Cart</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;