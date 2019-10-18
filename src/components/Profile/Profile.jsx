import React from 'react';
import profile_css from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props)=>{
    return (
      <div className="">
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
    );
};

export default Profile;