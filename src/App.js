import React from 'react';
import {Route} from 'react-router-dom';
/*import logo from './logo.svg';*/
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';

/*<Route exact/> - если хочешь чтобы был только конкретный путь*/
/*<Route render принимает не ссылку на компоненту как component, а передать можем другую функцию*/
const App = (props)=> {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar /> 
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={()=><Dialogs state ={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
          <Route path='/profile' render={()=><Profile state = {props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/news'  render={()=><Dialogs/>}/>
          <Route path='/music' render={()=><Profile/>}/>
          <Route path='/settings' render={()=><Dialogs/>}/>
        </div>
      </div>
  );
}

export default App;
