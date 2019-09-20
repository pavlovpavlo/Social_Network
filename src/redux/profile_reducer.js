const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts : [
            {id: 1, message: "Yoos", likesCount: "1"},
            {id: 2, message: "Hi", likesCount: "12"},
            {id: 3, message: "By", likesCount: "13"},
            {id: 4, message: "Wauuu", likesCount: "14"}
        ],
        newPostText: "new post"
}

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
        default:
            return state;
    }
}

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export default profileReducer;