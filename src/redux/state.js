import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, message: "Yoos", likesCount: "1"},
                {id: 2, message: "Hi", likesCount: "12"},
                {id: 3, message: "By", likesCount: "13"},
                {id: 4, message: "Wauuu", likesCount: "14"}
            ],
            newPostText: "new post"
        },
        dialogsPage: {
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
    },
    _callSubscriber(state){
        console.log("State changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){// {type: 'ADD-POST'}

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;