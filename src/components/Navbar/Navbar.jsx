import React from 'react';
import {NavLink} from 'react-router-dom';// Без перезагрузки страницы отобразить
import nav_css from './Navbar.module.css';

const Navbar = ()=>{
    return(
      <nav className={nav_css.nav}>
          <div className={nav_css.item}>
              <NavLink to="/profile" activeClassName={nav_css.active} >Profile</NavLink>
          </div>
          <div className={nav_css.item}>
              <NavLink to="/dialogs" activeClassName={nav_css.active}>Messages</NavLink>
          </div>
          <div className={nav_css.item}>
              <NavLink to="/news"  activeClassName={nav_css.active}>News</NavLink>
          </div>
          <div className={nav_css.item}>
              <NavLink to="/music"  activeClassName={nav_css.active}>Music</NavLink>
          </div>
          <div  className={nav_css.item}>
              <NavLink to="/settings" activeClassName={nav_css.active}>Settings</NavLink>
          </div>
      </nav>
    );
}

export default Navbar;