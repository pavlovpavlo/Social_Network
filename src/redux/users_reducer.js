import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        /*{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPe3W7c27J2AdfpXp0YoEQVfmsUMN_piZc1fhjPHhhtXbycbl', followed:false, fullName:'q', status:'Yoo', location: {city:'B', country:'D'}},
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPe3W7c27J2AdfpXp0YoEQVfmsUMN_piZc1fhjPHhhtXbycbl', followed:true, fullName:'q', status:'Yoo', location: {city:'B', country:'D'}},
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPe3W7c27J2AdfpXp0YoEQVfmsUMN_piZc1fhjPHhhtXbycbl', followed:true, fullName:'q', status:'Yoo', location: {city:'B', country:'D'}},
        {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPe3W7c27J2AdfpXp0YoEQVfmsUMN_piZc1fhjPHhhtXbycbl', followed:false, fullName:'q', status:'Yoo', location: {city:'B', country:'D'}}
    */],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case TOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.totalUserCount};
        }
        case TOGLE_IS_FOLLOWING_PROGRESS: {
            debugger;
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] :
                    [...state.followingInProgress.filter(id => id !== action.id)]
            };

        }

        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
};
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
};
export const setTotalUsersCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount
    }
};
export const toogleIsFetching = (isFetching) => {
    return {
        type: TOGLE_IS_FETCHING,
        isFetching
    }
};
export const toggleFollowingProgress = (isFetching, id) => {
    return {
        type: TOGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        id
    }
};

export const getUsers = (currentPage, pageSize) =>{
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toogleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};
export const follow = (userId) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId));
                }
            });
        dispatch(toggleFollowingProgress(false, userId));
    }
};
export const unfollow = (userId) =>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId));
                }
            });
        dispatch(toggleFollowingProgress(false, userId));
    }
};


export default usersReducer;