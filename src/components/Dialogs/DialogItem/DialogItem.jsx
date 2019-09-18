import React from 'react';
import {NavLink} from 'react-router-dom';
import dialogs_css from'./../Dialogs.module.css';

const DialogItem = (props)=>{
    let path = "/dialogs/"+props.id;
    console.log(props.id);
    return(
        <div className={dialogs_css.dialog+' ' +dialogs_css.active}>
            <div className = {dialogs_css.img}>

            </div>
            <NavLink to={path} activeClassName={dialogs_css.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;