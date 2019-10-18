import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getAuthUserData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {//метод при создании компоненты, при перерисовке не сработает так как компонента заново не создается(но при Route обьект умирает)
        this.props.getAuthUserData();
    };

    render(){
        return (
            <Header { ...this.props}/>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);