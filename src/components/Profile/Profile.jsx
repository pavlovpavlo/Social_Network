import React from 'react';
import profile_css from'./Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props)=>{
    return (
      <div className="">
        <ProfileInfo/>
        <MyPostsContainer />
      </div>
    );
}
export default Profile;