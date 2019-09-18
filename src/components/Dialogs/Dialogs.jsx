import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import dialogs_css from'./Dialogs.module.css';
import {sendMessageActionCreator, updateNewDialogMessageActionCreator} from '../../redux/dialog_reducer';

const Dialogs = (props)=>{

    let dialogsElement = props.state.dialogsData
        .map(dialog =><DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = props.state.messagesData
        .map(message =><Message message={message.message}/>);

    let newMesageElement = React.createRef();

    let sendMessage = ()=>{
        props.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = () =>{
        let text = newMesageElement.current.value;
        props.dispatch(updateNewDialogMessageActionCreator(text));
    }

    return(
        <div className={dialogs_css.dialogs}>
           <div className={dialogs_css.dialogs__items}>
                {dialogsElement}    
           </div>
           <div className={dialogs_css.messages}>
                <div>{messagesElement}</div>
                <div className = {dialogs_css.messages__input}>
                    <textarea placeholder = "Enter your message" ref = {newMesageElement} onChange = {onMessageChange} value={props.state.newDialogMessageText}/>
                    <button onClick = {sendMessage}>Send message</button>
                </div>
           </div>
        </div>
    );
}
export default Dialogs;