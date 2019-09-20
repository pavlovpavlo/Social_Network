import React from 'react';
import {Route} from 'react-router-dom';
/*import logo from './logo.svg';*/
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';

/*<Route exact/> - если хочешь чтобы был только конкретный путь*/
/*<Route render принимает не ссылку на компоненту как component, а передать можем другую функцию*/
const App = (props)=> {
  debugger;
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar /> 
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={()=><DialogsContainer/>}/>
          <Route path='/profile' render={()=><Profile/>}/>
          
        </div>
      </div>
  );
}

export default App;
