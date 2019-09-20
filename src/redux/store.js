import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
/*


let store = {
    _state: {
        
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

export default store;*/