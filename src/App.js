import React from 'react';
import {Route} from 'react-router-dom';
/*import logo from './logo.svg';*/
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";


/*<Route exact/> - если хочешь чтобы был только конкретный путь*/
/*<Route render принимает не ссылку на компоненту как component, а передать можем другую функцию*/
//:userId? необязательный параметр
const App = (props)=> {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar /> 
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={()=><DialogsContainer/>}/>
          <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
        </div>
      </div>
  );
}

export default App;
