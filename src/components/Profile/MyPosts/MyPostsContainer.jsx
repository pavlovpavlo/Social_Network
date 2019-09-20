import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

//данные с state
let mapStateToProps = (state)=>{
    return{
        profilePage: state.profilePage
    }
};
//callback
let mapDispatchToProps = (dispatch)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;