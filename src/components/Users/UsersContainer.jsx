import React from 'react';
import {connect} from 'react-redux';
import {
    follow, unfollow,
    setCurrentPage, toggleFollowingProgress, getUsers
} from '../../redux/users_reducer';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

//callback

class UsersContainer extends React.Component {
    componentDidMount() {//метод при создании компоненты, при перерисовке не сработает так как компонента заново не создается(но при Route обьект умирает)
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    toggleFollowingProgress, follow, setCurrentPage, unfollow, getUsers
})(UsersContainer);