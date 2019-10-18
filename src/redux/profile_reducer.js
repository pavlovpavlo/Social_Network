import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        posts : [
            {id: 1, message: "Yoos", likesCount: "1"},
            {id: 2, message: "Hi", likesCount: "12"},
            {id: 3, message: "By", likesCount: "13"},
            {id: 4, message: "Wauuu", likesCount: "14"}
        ],
        profile: null,
        newPostText: "new post"
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount:0
            };
            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }; 
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
};
const setUserProfile = (profile)=>{
    return{
        type: SET_USER_PROFILE,
        profile
    }
};
export const getUserProfile = (userId)=>(dispatch) =>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export default profileReducer;