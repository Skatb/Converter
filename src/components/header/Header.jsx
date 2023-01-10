import React from 'react';
import './header-style.css';

const Header = () => {
    return (
        <header className='header'>
            <ul className='header__list'>
                <li className="header__list-item">Вес</li>
                <li className="header__list-item">Длина</li>
                <li className="header__list-item">Скорость</li>
                <li className="header__list-item">Напряжение</li>
            </ul>
        </header>
    );
};

export default Header;