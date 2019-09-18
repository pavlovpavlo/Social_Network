const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

export const dialogReducer = (state, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newDialogMessageText,
            };
            state.messagesData.push(newMessage); 
            state.newDialogMessageText = "";
            return state;
        case UPDATE_NEW_DIALOG_MESSAGE:
            state.newDialogMessageText = action.newText; 
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () =>{
    return{
        type: SEND_MESSAGE
    }
}
export const updateNewDialogMessageActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_DIALOG_MESSAGE, 
        newText: text
    }
}

export default dialogReducer;