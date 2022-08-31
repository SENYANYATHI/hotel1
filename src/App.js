import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}from 'react';
import Home from './components/home';
import SignIn from './components/login';
import SignUp from './components/signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App() {

  return (
    <Router>
      <Routes>
       
      <Route exact path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        
        
      </Routes>
    </Router>
  );
}

export default App;
