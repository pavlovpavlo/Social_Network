import React from 'react';
import {sendMessageActionCreator, updateNewDialogMessageActionCreator} from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

//данные с state
let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
};
//callback
let mapDispatchToProps = (dispatch)=>{
    return{
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator());
        },
        messageChange: (text)=>{
            dispatch(updateNewDialogMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;