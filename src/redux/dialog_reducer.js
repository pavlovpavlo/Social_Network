const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE_NEW_DIALOG_MESSAGE';

let initialState = {
        messagesData : [
            {id: 1, message: "Yoo"},
            {id: 2, message: "Hi"},
            {id: 3, message: "By"},
            {id: 4, message: "Wauuu"}
        ],
         dialogsData : [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andr"},
            {id: 3, name: "Rom"},
            {id: 4, name: "Igo"}
        ],
        newDialogMessageText: ""
}

export const dialogReducer = (state = initialState, action) => {
    
    
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newDialogMessageText,
            }; 
            return {
                ...state,
                messagesData : [...state.messagesData, newMessage],
                newDialogMessageText: ''
            }; 
        case UPDATE_NEW_DIALOG_MESSAGE:{
            return {
                ...state,
                newDialogMessageText: action.newText
            }; 
        }
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