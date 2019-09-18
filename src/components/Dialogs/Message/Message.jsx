import React from 'react';
import dialogs_css from'./../Dialogs.module.css';

const Message = (props)=>{
    return(
        <div className={dialogs_css.message}>{props.message}</div>
    );
}
export default Message;