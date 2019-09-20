import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import dialogs_css from'./Dialogs.module.css';

const Dialogs = (props)=>{

    let dialogsElement = props.dialogsPage.dialogsData
        .map(dialog =><DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElement = props.dialogsPage.messagesData
        .map(message =><Message key={message.id} message={message.message}/>);

    let newMesageElement = React.createRef();

    let onsendMessage = ()=>{
        props.sendMessage();
    }
    let onMessageChange = () =>{
        let text = newMesageElement.current.value;
        props.messageChange(text);
    }

    return(
        <div className={dialogs_css.dialogs}>
           <div className={dialogs_css.dialogs__items}>
                {dialogsElement}    
           </div>
           <div className={dialogs_css.messages}>
                <div>{messagesElement}</div>
                <div className = {dialogs_css.messages__input}>
                    <textarea placeholder = "Enter your message" ref = {newMesageElement} onChange = {onMessageChange} 
                        value={props.dialogsPage.newDialogMessageText}/>
                    <button onClick = {onsendMessage}>Send message</button>
                </div>
           </div>
        </div>
    );
}
export default Dialogs;