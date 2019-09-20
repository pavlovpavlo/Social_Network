import { createStore,combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";

let redusers = combineReducers({
    dialogsPage : dialogReducer,
    profilePage : profileReducer
});//Склеить Redus-еры что есть в один

let store = createStore(redusers);


export default store;