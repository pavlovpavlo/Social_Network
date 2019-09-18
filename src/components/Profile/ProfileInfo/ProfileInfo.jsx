import React from 'react';
import ProfileInfo_css from'./ProfileInfo.module.css';


const ProfileInfo = ()=>{
    return (
      <div>
        <div>
          <img src="https://tinyjpg.com/images/social/website.jpg" alt=""/>
        </div> 
        <div className={ProfileInfo_css.description__block}>
          avatar * description
        </div>
    </div>
    );
}
export default ProfileInfo;