import React from 'react';
import ProfileInfo_css from'./ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props)=>{
    if(!props.profile){
        return <Preloader/>
    }
    return (
      <div>
        <div>
          <img src="https://tinyjpg.com/images/social/website.jpg" alt=""/>
        </div> 
        <div className={ProfileInfo_css.description__block}>
            <img src={props.profile.photos.large} alt=""/>
          avatar * description
        </div>
    </div>
    );
};
export default ProfileInfo;