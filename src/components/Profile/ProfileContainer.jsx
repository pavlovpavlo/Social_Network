import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux';
import {getUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    };
    render() {
        return  <Profile { ...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponentwithRouter = withRouter(ProfileContainer);//Дает данные какой урл

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponentwithRouter);