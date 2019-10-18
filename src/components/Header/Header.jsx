import React from 'react';
import header_css from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    return (
        <header className={header_css.header}>
            <img className={header_css.header__img} src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt=""/>
            <div className={header_css.loginBlock}>
                {props.isAuth? props.login:
                    <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    );
};
export default Header;