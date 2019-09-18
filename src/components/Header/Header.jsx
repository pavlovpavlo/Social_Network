import React from 'react';
import header_css from'./Header.module.css';

const Header = ()=>{
    return (
        <header className={header_css.header}>
            <img className={header_css.header__img} src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt=""/>
        </header>
    );
}
export default Header;