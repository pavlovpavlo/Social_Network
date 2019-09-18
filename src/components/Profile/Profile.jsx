import React from 'react';
import profile_css from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props)=>{
    return (
      <div className="">
        <ProfileInfo/>
        <MyPosts posts = {props.state.posts} newPostText = {props.state.newPostText} dispatch = {props.dispatch}/>
      </div>
    );
}
export default Profile;