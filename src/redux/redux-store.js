import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from  "redux-thunk"

let redusers = combineReducers({
    dialogsPage : dialogReducer,
    profilePage : profileReducer,
    usersPage : usersReducer,
    auth: authReducer
});//Склеить Redus-еры что есть в один
//applyMiddleware слой что умеет обробатівать функции (санки) нужно npm i redux-thunk
let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;