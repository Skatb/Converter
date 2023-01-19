import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-style.css';

const Header = () => {
    return (
        <header className='header'>
            <ul className='header__list'>
                <li className="header__list-item">
                    <NavLink to="/weight" className="header__link-item">Масса</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/range" className="header__link-item">Длина</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/pi" className="header__link-item">π после запятой</NavLink>
                </li>
                <li className="header__list-item">Напряжение</li>
            </ul>
        </header>
    );
};

export default Header;